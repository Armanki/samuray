import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="hi how are you" likesCount="35"/>
                <Post message="it's my first react" likesCount="45"/>
            </div>
        </div>
    )
}
export default MyPosts