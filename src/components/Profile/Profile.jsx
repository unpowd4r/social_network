import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import React from "react";
// import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post}/>
        </div>
    );
}

export default Profile