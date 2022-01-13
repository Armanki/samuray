import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://1news.az/images/articles/2013/12/16/thumb_20131216111710213.jpg?2021-02-17+09%3A23%3A27"/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
)
}
export default Post