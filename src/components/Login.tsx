import React, { useState, useEffect } from 'react';
import SettingsDialog from './SettingsDialog';

const Login = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // 从本地存储加载数据
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername) setUsername(savedUsername);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  useEffect(() => {
    // 保存数据到本地存储
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }, [username, password]);

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div 
        className={`
          bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-sm 
          backdrop-filter backdrop-blur-sm 
          transition-all duration-500 ease-in-out
          ${isSettingsOpen 
            ? 'opacity-0 scale-95 translate-x-full rotate-12 pointer-events-none' 
            : 'opacity-100 scale-100 translate-x-0 rotate-0'}
        `}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">登录</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="username">
              用户名
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-70 focus:bg-opacity-100"
              id="username"
              type="text"
              placeholder="用户名"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="password">
              密码
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-70 focus:bg-opacity-100"
              id="password"
              type="password"
              placeholder="******************"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 w-[45%]"
              type="button"
              onClick={() => setIsSettingsOpen(true)}
            >
              设置
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 w-[45%]"
              type="button"
              onClick={handleReset}
            >
              重置
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 w-full"
              type="button"
            >
              登录
            </button>
          </div>
        </form>
      </div>
      <SettingsDialog 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default Login;