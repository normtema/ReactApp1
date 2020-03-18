import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {


    let PeopleArr = props.people.PeopleData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let MessageArr = props.people.MessageData.map( mess => <MessageItem message={mess.message}/> )


    let newMessageEl = React.createRef();


    let addMessage = () => {
      props.addMessage();
    };
  
    let onMessageChange = () => {
        let text=newMessageEl.current.value;
        props.updateNewMessageText(text);
    };

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__people}>
                {PeopleArr}

            </div>
            <div className={classes.dialogs__messages}>
                <div>
                    <div>
                        <textarea ref = {newMessageEl} onChange={onMessageChange} value={props.people.newMessageText} />
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