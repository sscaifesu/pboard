import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lineCount = 5;
    const pointsPerLine = 1000;
    const lines: { points: number[], phase: number, frequency: number, amplitude: number }[] = [];

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        points: Array(pointsPerLine).fill(0),
        phase: Math.random() * Math.PI * 2,
        frequency: 0.5 + Math.random() * 1.5,
        amplitude: 50 + Math.random() * 50
      });
    }

    const colors = [
      'rgba(83, 227, 166, 0.5)',
      'rgba(80, 163, 162, 0.5)',
      'rgba(66, 133, 244, 0.5)'
    ];

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line, index) => {
        ctx.beginPath();
        ctx.strokeStyle = colors[index];
        ctx.lineWidth = 2;

        for (let i = 0; i < pointsPerLine; i++) {
          const x = (i / pointsPerLine) * canvas.width;
          const y = canvas.height / 2 + 
                    Math.sin(i * 0.01 * line.frequency + line.phase + time) * line.amplitude +
                    Math.sin(i * 0.02 * line.frequency + line.phase + time * 1.5) * (line.amplitude * 0.5) +
                    Math.sin(i * 0.04 * line.frequency + line.phase + time * 0.5) * (line.amplitude * 0.25);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          line.points[i] = y;
        }

        ctx.stroke();

        // 缓慢改变相位
        line.phase += 0.003;
      });

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default DynamicBackground;