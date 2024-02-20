import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import React from "react";


const Profile = (props) => {

    const { posts } = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile