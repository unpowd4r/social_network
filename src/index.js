import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import store from './redux/redux-store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
);}

renderEntireTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    renderEntireTree(state)
})

reportWebVitals();


