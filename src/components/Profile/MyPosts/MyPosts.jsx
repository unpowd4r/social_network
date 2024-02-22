import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.name}
                                                 likesCounts={post.likesCount}/>)
    let newPostElement = React.createRef()

    let onAddPosts = () => {
        props.addPost()
    }

    let onPostChanges = () => {
        let text = newPostElement.current.value
        props.updateNewText(text)
    }

    return (
        <div className={s.content}>
            <div className={s.postAndButton}>
                <textarea onChange={onPostChanges}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={onAddPosts}>Добавить пост</button>
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