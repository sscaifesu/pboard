import React from 'react';
import Login from './components/Login';
import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <div className="App relative min-h-screen overflow-hidden">
      <DynamicBackground />
      <Login />
    </div>
  );
}

export default App;
