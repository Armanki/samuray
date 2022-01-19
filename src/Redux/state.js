import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReduser from "./sidebar-reducer";

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
            ],
            newMessageBody: "",
        },
        profilePage: {
            posts: [
                {id: 1, message: "hi how are you", likesCount: 35},
                {id: 2, message: "it's my first react", likesCount: 45},
                {id: 3, message: "hi", likesCount: 15}
            ],
            newPostText: "Arman"
        },
        sidebar: {}
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



export default store;