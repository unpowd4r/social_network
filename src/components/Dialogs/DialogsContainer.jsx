import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage

    let addMessages = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let messageChanges = (text) => {
        let action = updateNewMessageBodyCreator(text)
        props.store.dispatch(action)
    }

    return <Dialogs updateNewMessageBody={messageChanges}
                    sendMessage={addMessages}
                    messagesPage={state}/>
}

export default DialogsContainer