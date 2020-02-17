import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-wrap'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
