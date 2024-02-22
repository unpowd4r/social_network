import React from "react";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                    let state = store.getState()
                    let addPosts = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let postChanges = (text) => {
                        let action = updateNewTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return <MyPosts updateNewText={postChanges}
                                    addPost={addPosts}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer