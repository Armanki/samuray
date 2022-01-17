import {rerenderEntireTree} from "../render"

export let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Arman"},
            {id: 2, name: "Serob"},
            {id: 3, name: "Hakob"},
            {id: 4, name: "Raz"},
            {id: 5, name: "Gor"},
            {id: 6, name: "Levon"}
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how is your samuray"},
            {id: 3, message: "yey"},
            {id: 4, message: "yey"},
            {id: 5, message: "yey"}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: "hi how are you", likesCount: 35},
            {id: 2, message: "it's my first react", likesCount: 45},
            {id: 3, message: "hi", likesCount: 15}
        ],
        newPostText: "Arman"
    }
}
export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}
export let opdateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;