import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let post =
    [
        {id: 1, name: 'Hi, how are you?', likesCount: 24},
        {id: 2, name: 'It\'s my first post', likesCount: 11},
        {id: 3, name: 'It\'s my first post', likesCount: 7},
        {id: 4, name: 'It\'s my first post', likesCount: 31},
    ]

let dialogs =
    [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Fedor'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Stas'},
        {id: 6, name: 'Sergei'},
    ]

let messages =
    [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Yo!'},
        {id: 4, name: 'Yo!'},
        {id: 5, name: 'Yo!'},
    ];

ReactDOM.render(
    <BrowserRouter>
        <App dialogs={dialogs} messages={messages} post={post}/>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
