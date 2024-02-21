const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Hi, how are you?', likesCount: 24},
                {id: 2, name: 'It\'s my first post', likesCount: 11},
                {id: 3, name: 'It\'s my first post', likesCount: 7},
                {id: 4, name: 'It\'s my first post', likesCount: 31},
            ],
            newPostText: [
                ''
            ]


        },
        messagesPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state;
    },
    addMessage() {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                name: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessages = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                msg: this._state.messagesPage.newMessages,
            };

            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessages = ''
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })

export default store;
window.store = store

