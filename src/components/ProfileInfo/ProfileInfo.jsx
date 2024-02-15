import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (

        <div className={s.profile}>
            <div className={s.footerPhoto}>
                <img className='footer-photo'
                     src='https://img.freepik.com/free-photo/majestic-mountain-range-reflects-tranquil-scene-in-water-generated-by-ai_188544-18340.jpg?w=1380&t=st=1706134326~exp=1706134926~hmac=b99bef7fbcb07a4cfc62c84d6487a496311ca85be500cf0b922868a80db5d9a2'
                     alt='img'/>
            </div>
            <div className={s.profileDesc}>
                <div className={s.background_photo}>
                    <img className='ava-photo'
                         src='https://img.freepik.com/free-photo/full-shot-couple-looking-at-the-moon_23-2150385850.jpg?w=996&t=st=1706134538~exp=1706135138~hmac=f89460c4ccb781344ec6ae9bc3106ae9a532ca642f937a9e8ac744a36c490d00'
                         alt='img'/>
                </div>
                <div className={s.desc}>
                    <p className='Name'><b>Sergei Frolov</b></p>
                    <p> Date of Brith: 23 april </p>
                    <p> City: Samara </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
