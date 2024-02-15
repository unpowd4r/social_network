import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id: 1, name: 'Hi, how are you?', likesCount: 24},
        {id: 2, name: 'It\'s my first post', likesCount: 11},
    ]

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
                <Post message={postData[0].message} likesCounts={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCounts={postData[1].likesCount}/>
            </div>
        </div>

    );
}

export default MyPosts