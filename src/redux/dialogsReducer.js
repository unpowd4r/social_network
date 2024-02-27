const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, msg: 'Hi'},
        {id: 2, msg: 'How are you?'},
        {id: 3, msg: 'Yo!'},
        {id: 4, msg: 'Yo!'},
        {id: 5, msg: 'Yo!'},
    ],
    newMessages: [
        ''
    ],
    dialogs: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Fedor'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Stas'},
        {id: 6, name: 'Sergei'},
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessages: action.newText
            }
        case SEND_MESSAGE:
            let newText = state.newMessages
            return {
                ...state,
                newMessages: '',
                messages: [...state.messages, {id: 6, msg: newText}],
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })
export default dialogsReducer