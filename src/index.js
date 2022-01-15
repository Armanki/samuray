import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id:1, message:"hi how are you", likesCount: 35},
    {id:2, message:"it's my first react", likesCount: 45},
    {id:3, message:"hi", likesCount: 15}
]
let dialogs = [
    {id: 1, name: "Arman"},
    {id: 2, name: "Serob"},
    {id: 3, name: "Hakob"},
    {id: 4, name: "Raz"},
    {id: 5, name: "Gor"},
    {id: 6, name: "Levon"}
]
let messages = [
    {id: 1, message: "hi"},
    {id: 2, message: "how is your samuray"},
    {id: 3, message: "yey"},
    {id: 4, message: "yey"},
    {id: 5, message: "yey"}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
