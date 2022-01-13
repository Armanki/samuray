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
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default MyPosts