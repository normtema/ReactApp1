import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <Header />
        <Navbar />
        <div className='app-wrap__content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
