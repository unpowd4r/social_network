import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
    const { posts } = props

    let postsElements = posts.map( post => <Post message={post.name} likesCounts={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let postChange = () => {
        let text = newPostElement.current.value
        props.postChange(text)
    }

    return (
        <div className={s.content}>
            <div className={s.postAndButton}>
                <textarea onChange={postChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>add post</button>
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