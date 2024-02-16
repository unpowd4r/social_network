import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages'



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                            id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <Messages message={message.name}/>);

    let addMessageElement = React.createRef()
    let addMessage = () => {
        props.addMessage()
    }

    let messageChange = () => {
        let text = addMessageElement.current.value
        props.messageChange(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
            <textarea onChange={messageChange} ref={ addMessageElement } value={props.newMessages}></textarea>
            <button onClick={ addMessage }></button>
        </div>
    )
}

export default Dialogs