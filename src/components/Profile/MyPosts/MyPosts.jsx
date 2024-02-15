import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
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
                <Post message='Hi, how are you?' likesCounts='24 likes'/>
                <Post message="It's my first post" likesCounts='10 likes'/>
            </div>
        </div>

    );
}

export default MyPosts