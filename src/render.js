import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, opdateNewPostText} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} opdateNewPostText={opdateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
