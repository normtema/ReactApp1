import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <Header />
        <Navbar />
        <div className='app-wrap__content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.people} /> } />
          <Route path='/profile' render={ () => <Profile state={props.state.post} addPost={props.addPost} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
