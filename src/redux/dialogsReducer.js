const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessages = action.newText
            return state

        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                msg: state.newMessages,
            };

            state.messages.push(newMessage)
            state.newMessages = ''
            return state

        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })
export default dialogsReducer