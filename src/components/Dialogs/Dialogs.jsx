import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages'


const Dialogs = (props) => {

    const {dialogs, messages, messageChange, addMessage, newMessages} = props

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name}
                                                            id={dialog.id}/>);
    let messagesElements = messages.map(message => <Messages message={message.name}/>);

    let addMessageElement = React.createRef()
    let addMessages = () => {
        addMessage()
    }

    let messageChanges = () => {
        let text = addMessageElement.current.value
        messageChange(text)
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
                          ref={addMessageElement}
                          value={newMessages}></textarea>
                <button onClick={addMessages}> Отправить </button>
            </div>
        </div>
    )
}

export default Dialogs