import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (

      <div className='app-wrap'>
        <Header />
        <Navbar />
        <div className='app-wrap__content'>
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/users' render={ () => <UsersContainer />  } />
        </div>
      </div>

  );
}

export default App;
