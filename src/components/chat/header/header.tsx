import React, { useState } from 'react';
import styles from './header.module.scss';

interface Props {
    title: string;
}

function ChatHeader(Props: Props) {
    const { title } = Props;
    return (
        <div className={styles.header}>
            <div className={styles.userinfo}>
                <div className={styles.status + ' ' + styles.online}></div>
                <div>{title}</div>
            </div>
        </div>
    );
}

export default ChatHeader;
