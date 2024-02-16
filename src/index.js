import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import state, {subscribe} from './redux/state'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, messageChange, postChange} from "./redux/state";

let renderEntireTree = () => {ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             addPost={addPost}
             postChange={postChange}
             addMessage={addMessage}
             messageChange={messageChange}/>
    </BrowserRouter>,
    document.getElementById('root')
);}

renderEntireTree(state)

subscribe(renderEntireTree)

reportWebVitals();


