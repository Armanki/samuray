import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (

        <div>
            My posts
            <div className="posts">
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message="hi how are you" likesCount="35"/>
            <Post message="it's my first react" likesCount="45"/>
        </div>
    )
}
export default MyPosts