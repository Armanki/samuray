const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "OPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "hi how are you", likesCount: 35},
        {id: 2, message: "it's my first react", likesCount: 45},
        {id: 3, message: "hi", likesCount: 15}
    ],
    newPostText: "Arman"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
          return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case "OPDATE-NEW-POST-TEXT":
            return  {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const opdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;