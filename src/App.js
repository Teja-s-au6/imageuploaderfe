import React from 'react';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import CreatePage from './pages/CreatePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <RegisterPage />
      <CreatePage />
      <LoginPage />
      <HomePage />
    </div>
  );
}

export default App;
