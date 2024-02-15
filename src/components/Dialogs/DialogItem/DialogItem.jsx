import React from 'react';
import styles from './DialogItem.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    const { name, id } = props

    let path = '/dialogs/' + id

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;


