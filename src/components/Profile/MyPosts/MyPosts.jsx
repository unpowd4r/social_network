import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    const { posts, dispatch, newPostText } = props

    let postsElements = posts.map( post => <Post message={post.name}
                                                 likesCounts={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPosts = () => {
        dispatch(addPostActionCreator())
    }

    let postChanges = () => {
        let text = newPostElement.current.value
        let action = updateNewTextActionCreator(text)
        dispatch(action)
    }

    return (
        <div className={s.content}>
            <div className={s.postAndButton}>
                <textarea onChange={postChanges}
                          ref={newPostElement}
                          value={newPostText}/>
                <button onClick={addPosts}>Добавить пост</button>
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