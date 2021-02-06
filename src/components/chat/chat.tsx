import React from 'react';
import styles from './chat.module.scss';
import ChatHeader from './header/header';
import MessageList from './list/list';
import NewMessage from './list/new-message/new-message';

function Chat() {
    return (
        <div className={styles.chat}>
            <ChatHeader />

            <div className={styles.messageWrapper}>
                <MessageList />
            </div>

            <div>
                <NewMessage />
            </div>
        </div>
    );
}

export default Chat;
