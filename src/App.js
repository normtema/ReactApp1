import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route} from 'react-router-dom';


function App(props) {
  return (

      <div className='app-wrap'>
        <Header />
        <Navbar />
        <div className='app-wrap__content'>
          <Route path='/dialogs' render={ () => <Dialogs dialogsState={props.state.people} dispatch={props.dispatch} newMessageText={props.state.people.MessageText} /> } />
          <Route path='/profile' render={ () => <Profile profileState={props.state.post} dispatch={props.dispatch} /> } />
        </div>
      </div>

  );
}

export default App;
