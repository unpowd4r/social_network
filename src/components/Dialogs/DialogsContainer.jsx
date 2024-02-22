import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().messagesPage
            let addMessages = () => {
                store.dispatch(sendMessageCreator())
            }
            let messageChanges = (text) => {
                let action = updateNewMessageBodyCreator(text)
                store.dispatch(action)
            }
            return <Dialogs updateNewMessageBody={messageChanges}
                            sendMessage={addMessages}
                            messagesPage={state}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer