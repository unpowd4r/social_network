import React from "react";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPosts = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let postChanges = (text) => {
        let action = updateNewTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewText={postChanges} addPost={addPosts}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText} />);
}
export default MyPostsContainer