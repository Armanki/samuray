const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "OPDATE-NEW-POST-TEXT";


const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case "OPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export let addPostActionCreator = () => ({type: ADD_POST});
export let opdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;