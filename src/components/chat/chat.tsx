import React, { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import styles from './chat.module.scss';
import ChatHeader from './header/header';
import { useChatContext } from './chat.state';
import MessageList from './list/list';
import NewMessage from './list/new-message/new-message';
import { useAppContext } from '../../App.state';

function Chat() {
    const { chat, loadChat, sendNewMessage } = useChatContext();
    const { userInfo } = useAppContext();

    useEffect(() => {
        loadChat();
    }, [userInfo]);

    return (
        <div className={styles.chat}>
            <ChatHeader title={userInfo.title} />

            <div className={styles.messageWrapper}>
                {chat.loading && (
                    <div className={styles.spinnerWrapper}>
                        <Spinner size="m" theme="dark" />
                    </div>
                )}
                {!chat.loading && <MessageList list={chat.data} />}
            </div>

            <div>
                <NewMessage onSend={(msg) => sendNewMessage(msg, 2)} />
            </div>
        </div>
    );
}

export default Chat;
