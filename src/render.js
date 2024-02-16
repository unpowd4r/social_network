import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, newPostTextNull, postChange} from "./redux/state";

export let renderEntireTree = (state) => {ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} postChange={postChange}/>
    </BrowserRouter>,
    document.getElementById('root')
);}


reportWebVitals();
