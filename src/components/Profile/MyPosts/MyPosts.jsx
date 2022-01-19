import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let newPosrElement = React.createRef()
    let addPost = () => {
        props.dispatch({type:"ADD-POST"});
    }
    let onPostChange = () => {
        let text = newPosrElement.current.value;
        let action = {type:"OPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action)

    }

    let postsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPosrElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts