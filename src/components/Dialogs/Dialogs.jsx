import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from './../../redux/state';

const Dialogs = (props) => {


    let PeopleArr = props.dialogsState.PeopleData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let MessageArr = props.dialogsState.MessageData.map( mess => <MessageItem message={mess.message}/> )


    let newMessageEl = React.createRef();


    let addMessage = () => {
      props.dispatch(addMessageActionCreator());
    };
  
    let onMessageChange = () => {
      let text=newMessageEl.current.value;
      let action = updateNewMessageTextActionCreator(text);
      props.dispatch(action);
    };

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__people}>
                {PeopleArr}

            </div>
            <div className={classes.dialogs__messages}>
                <div>
                    <div>
                        <textarea ref = {newMessageEl} onChange={onMessageChange} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={addMessage} >Add Message</button>
                    </div>
                </div>
                {MessageArr}
            </div>
            
        </div>
    )
}

export default Dialogs;