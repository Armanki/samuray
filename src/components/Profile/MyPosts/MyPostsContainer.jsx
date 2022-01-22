import React from "react";
import MyPosts from "./MyPosts"
import {connect} from "react-redux";
import {addPostActionCreator, opdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        opdateNewPostText: (text) => {
            let action = opdateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;