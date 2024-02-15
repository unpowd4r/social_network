import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import React from "react";
// import Post from "./MyPosts/Post/Post";


const Profile = (props) => {

    const { posts } = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile