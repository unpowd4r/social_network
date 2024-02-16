import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages'



const Dialogs = (props) => {

    const { dialogs, messages } = props

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map(message => <Messages message={message.name}/>);

    let addMessageElement = React.createRef()
    let addMessage = () => {
        let newMessage = addMessageElement.current.value
        alert(newMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
            <textarea ref={ addMessageElement }></textarea>
            <button onClick={ addMessage }></button>
        </div>
    )
}

export default Dialogs