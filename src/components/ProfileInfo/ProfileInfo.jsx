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
                         src='https://img.freepik.com/free-photo/image-of-holstein-cow-on-yellow-background_1409-4230.jpg?w=740&t=st=1706177509~exp=1706178109~hmac=fd205c6d8226c82ac7de100016b9b71153ed56490fa79930829287a97b32821e'
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
