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

    let dialogs =
        [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Fedor'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Max'},
            {id: 5, name: 'Stas'},
            {id: 6, name: 'Sergei'},
        ]

    let messages =
        [
            {id: 1, name: 'Hi'},
            {id: 2, name: 'How are you?'},
            {id: 3, name: 'Yo!'},
            {id: 4, name: 'Yo!'},
            {id: 5, name: 'Yo!'},
        ];

    let dialogsElements = dialogs.map(dialogsData => <DialogItem name={dialogsData.name} id={dialogsData.id}/>);
    let messagesElements = messages.map(message => <Message message={message.name}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs