import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    },
};

export default store;
window.store = store

