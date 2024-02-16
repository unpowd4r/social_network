let renderEntireTree = () => {
    console.log('state is changed')
}

let state =
    {
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
            newMessages :[
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
    };

export const addPost = () => {
    let newPost = {
        id: 5,
        name: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    renderEntireTree(state);
};

export const postChange = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        name: state.messagesPage.newMessages,
    };

    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessages = ''
    renderEntireTree(state);
}

export const messageChange = (newMessage) => {
    state.messagesPage.newMessages = newMessage
    renderEntireTree(state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer
}



export default state;