import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    const {dialogs, messages, dispatch, newMessages} = props

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name}
                                                            id={dialog.id}/>);
    let messagesElements = messages.map(message => <Messages message={message.msg}/>);

    let addMessages = () => {
        dispatch(sendMessageCreator())
    }

    let messageChanges = (e) => {
        let text = e.target.value
        let action = updateNewMessageBodyCreator(text)
        dispatch(action)
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