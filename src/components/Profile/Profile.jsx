import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import React from "react";
import {newPostTextNull} from "../../redux/state";
// import Post from "./MyPosts/Post/Post";


const Profile = (props) => {

    const { posts } = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     postChange={props.postChange}/>
        </div>
    );
}

export default Profile