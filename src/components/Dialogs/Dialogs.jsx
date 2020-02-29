import React from 'react';
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {


    let PeopleArr = props.state.PeopleData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let MessageArr = props.state.MessageData.map( mess => <MessageItem message={mess.message}/> )

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