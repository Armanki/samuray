let store = {
    _callSubscriber() {
        console.log("state changed");
    },
    _state: {
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
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state)
        }else if (action.type === "OPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;