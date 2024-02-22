import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    let state = props.messagesPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                            id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Messages message={message.msg}/>);
    let newMessages = state.newMessages

    let addMessages = () => {
        props.sendMessage()
    }

    let messageChanges = (e) => {
        let text = e.target.value
        props.updateNewMessageBody(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsMessages}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={styles.buttonAndArea}>
                <textarea onChange={messageChanges}
                          value={newMessages}></textarea>
                <button onClick={addMessages}> Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs