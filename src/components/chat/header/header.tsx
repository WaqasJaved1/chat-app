import React from 'react';
import styles from './header.module.scss';

function ChatHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.userinfo}>
                <div className={styles.status + ' ' + styles.online}></div>
                <div>Waqas Javed</div>
            </div>
        </div>
    );
}

export default ChatHeader;
