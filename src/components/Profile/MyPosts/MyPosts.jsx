import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.post.map( post => <Post message={post.name} likesCounts={post.likesCount}/>)

    return (
        <div className={s.content}>
            <div className={s.postAndButton}>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                My posts
            </div>
            <div className={s.postContainer}>
                { postsElements }
            </div>
        </div>

    );
}

export default MyPosts