import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import store from './redux/redux-store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

reportWebVitals();


