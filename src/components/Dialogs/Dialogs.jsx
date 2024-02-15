import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Valera' id='1'/>
                <DialogItem name='Fedor' id='2'/>
                <DialogItem name='Egor' id='3'/>
                <DialogItem name='Max' id='4'/>
                <DialogItem name='Stas' id='5'/>
                <DialogItem name='Sergei' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message = 'Hi'/>
                <Message message = 'How are you?'/>
                <Message message = 'Yo!'/>
            </div>
        </div>
    )
}

export default Dialogs