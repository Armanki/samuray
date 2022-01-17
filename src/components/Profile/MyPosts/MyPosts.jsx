import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
    let newPosrElement = React.createRef()
    let addPost = () => {
        let text = newPosrElement.current.value;
        props.addPost(text);
        newPosrElement.current.value = "";

    }

    let postsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPosrElement}></textarea>
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