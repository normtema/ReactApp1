import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let PeopleData = [
        {id:1, name: 'Vasya'},
        {id:2, name: 'Kolya'},
        {id:3, name: 'Stasik'},
        {id:4, name: 'Bogdan'},
        {id:5, name: 'Ilya'},
        {id:6, name: 'Dima'},
    ];

    let MessageData = [
        {id:1, message: 'Hello!'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'I am fine'},
    ];

    let PeopleArr = PeopleData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let MessageArr = MessageData.map( mess => <MessageItem message={mess.message}/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__people}>
                {PeopleArr}

            </div>
            <div className={classes.dialogs__messages}>
                {MessageArr}
            </div>
            
        </div>
    )
}

export default Dialogs;