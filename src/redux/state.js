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
                {id: 1, name: 'Hi'},
                {id: 2, name: 'How are you?'},
                {id: 3, name: 'Yo!'},
                {id: 4, name: 'Yo!'},
                {id: 5, name: 'Yo!'},
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
    addPost() {
        let newPost = {
            id: 5,
            name: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    postChange(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 6,
            name: this._state.messagesPage.newMessages,
        };

        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessages = ''
        this._callSubscriber(this._state);
    },
    messageChange(newMessage) {
        this._state.messagesPage.newMessages = newMessage
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
};

export default store;
window.store = store

