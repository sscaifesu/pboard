import React, { useState, useEffect, useCallback } from 'react';
import SettingsDialog from './SettingsDialog';
import { encryptData, decryptData } from '../utils/encryption'; // 假设我们有这个加密/解密工具

/**
 * Login 组件
 * 
 * 这个组件负责处理用户登录。它包含一个登录表单，
 * 允许用户输入用户名和密码，并提供设置服务器的选项。
 */
const Login: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [server, setServer] = useState('');
  const [port, setPort] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // 从 sessionStorage 加载加密的数据
    const encryptedData = sessionStorage.getItem('loginData');
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      setUsername(decryptedData.username || '');
      setServer(decryptedData.server || '');
      setPort(decryptedData.port || '');
    }
  }, []);

  useEffect(() => {
    // 保存加密数据到 sessionStorage
    const dataToEncrypt = { username, server, port };
    const encryptedData = encryptData(dataToEncrypt);
    sessionStorage.setItem('loginData', encryptedData);
  }, [username, server, port]);

  const handleReset = useCallback(() => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
  }, []);

  /**
   * 处理登录尝试
   * 
   * 这个函数验证输入字段，并尝试进行登录。
   * 如果登录成功，它会清除错误消息并执行登录逻辑。
   * 如果失败，它会显示一个错误消息。
   */
  const handleLogin = useCallback(() => {
    if (!username || !password || !server || !port) {
      setErrorMessage('请填写所有必填项');
      return;
    }
    
    // 这里应该是实际的登录逻辑
    console.log('登录尝试', { username, server, port });
    
    // 模拟登录过程
    setTimeout(() => {
      const success = Math.random() > 0.5; // 随机模拟成功或失败
      if (success) {
        setErrorMessage('');
        console.log('登录成功');
        // 这里应该有登录成功后的逻辑
      } else {
        setErrorMessage('登录失败，请检查您的凭据和服务器设置');
      }
    }, 1000);
  }, [username, password, server, port]);

  const handleSettingsClose = useCallback((newServer: string, newPort: string) => {
    setServer(newServer);
    setPort(newPort);
    setIsSettingsOpen(false);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center" role="main" aria-label="登录页面">
      <div 
        className={`
          bg-white bg-opacity-10 p-8 rounded-lg shadow-md w-full max-w-sm 
          backdrop-filter backdrop-blur-sm 
          transition-all duration-500 ease-in-out
          ${isSettingsOpen 
            ? 'opacity-0 scale-95 translate-x-full rotate-12 pointer-events-none' 
            : 'opacity-100 scale-100 translate-x-0 rotate-0'}
        `}
        role="form"
        aria-label="登录表单"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white" id="login-heading">登录</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} aria-labelledby="login-heading">
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
              aria-required="true"
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
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm" role="alert">{errorMessage}</div>
          )}
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
              type="submit"
            >
              登录
            </button>
          </div>
        </form>
      </div>
      <SettingsDialog 
        isOpen={isSettingsOpen} 
        onClose={handleSettingsClose}
        initialServer={server}
        initialPort={port}
      />
    </div>
  );
};

export default Login;