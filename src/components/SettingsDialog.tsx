import React, { useState, useEffect, useRef } from 'react';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ isOpen, onClose }) => {
  const [server, setServer] = useState('');
  const [port, setPort] = useState('');
  const [authMethod, setAuthMethod] = useState('pam');
  const [isAuthMethodOpen, setIsAuthMethodOpen] = useState(false);
  const authMethodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 从本地存储加载数据
    const savedServer = localStorage.getItem('server');
    const savedPort = localStorage.getItem('port');
    const savedAuthMethod = localStorage.getItem('authMethod');
    if (savedServer) setServer(savedServer);
    if (savedPort) setPort(savedPort);
    if (savedAuthMethod) setAuthMethod(savedAuthMethod);
  }, []);

  useEffect(() => {
    // 保存数据到本地存储
    localStorage.setItem('server', server);
    localStorage.setItem('port', port);
    localStorage.setItem('authMethod', authMethod);
  }, [server, port, authMethod]);

  useEffect(() => {
    // 点击外部关闭下拉菜单
    const handleClickOutside = (event: MouseEvent) => {
      if (authMethodRef.current && !authMethodRef.current.contains(event.target as Node)) {
        setIsAuthMethodOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReset = () => {
    setServer('');
    setPort('');
    setAuthMethod('pam');
  };

  const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 只允许输入数字,并且端口范围在 1-65535 之间
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 1 && parseInt(value) <= 65535)) {
      setPort(value);
    }
  };

  const toggleAuthMethod = () => {
    setIsAuthMethodOpen(!isAuthMethodOpen);
  };

  const selectAuthMethod = (method: string) => {
    setAuthMethod(method);
    setIsAuthMethodOpen(false);
    // 移除这里的 onClose() 调用
  };

  return (
    <div 
      className={`
        fixed inset-0 flex items-center justify-center pointer-events-none
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div 
        className={`
          bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-sm 
          backdrop-filter backdrop-blur-sm 
          transition-all duration-500 ease-in-out
          ${isOpen 
            ? 'opacity-100 scale-100 translate-x-0 rotate-0 pointer-events-auto' 
            : 'opacity-0 scale-95 -translate-x-full -rotate-12 pointer-events-none'}
        `}
      >
        <div className="relative">
          <button
            className="absolute -top-2 -right-2 bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full p-1 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
            onClick={onClose}
            aria-label="关闭设置"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">设置</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="server">
              服务器
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-70 focus:bg-opacity-100"
              id="server"
              type="text"
              placeholder="服务器IP地址或域名"
              value={server}
              onChange={(e) => setServer(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="port">
              端口
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-70 focus:bg-opacity-100"
              id="port"
              type="number"
              min="1"
              max="65535"
              placeholder="通信端口 (1-65535)"
              value={port}
              onChange={handlePortChange}
            />
          </div>
          <div className="mb-6" ref={authMethodRef}>
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="authMethod">
              认证方式
            </label>
            <div className="relative">
              <button
                type="button"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-70 focus:bg-opacity-100 text-left"
                onClick={toggleAuthMethod}
              >
                {authMethod === 'pam' ? 'PAM' : 'PVE'}
              </button>
              <div 
                className={`
                  absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${isAuthMethodOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
                  origin-top
                `}
              >
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => selectAuthMethod('pam')}
                >
                  PAM
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => selectAuthMethod('pve')}
                >
                  PVE
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 w-[45%]"
              type="button"
              onClick={onClose}
            >
              保存
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 w-[45%]"
              type="button"
              onClick={handleReset}
            >
              重置
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsDialog;