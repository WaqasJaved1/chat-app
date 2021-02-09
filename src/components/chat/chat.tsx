import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/spinner';
import styles from './chat.module.scss';
import ChatHeader from './header/header';
import { useChatContext } from './chat.state';
import MessageList from './list/list';
import NewMessage from './list/new-message/new-message';
import { useAppContext } from '../../App.state';
import { MessageProps } from './list/message/message';

function Chat() {
    const { chat, loadChat, sendNewMessage } = useChatContext();
    const { userInfo } = useAppContext();

    const [currentChat, setCurrentChat] = useState<MessageProps[]>();

    useEffect(() => {
        loadData();
    }, [userInfo, chat]);

    const loadData = async () => {
        const c = await loadChat(userInfo.id);
        setCurrentChat(c);
    };

    return (
        <div className={styles.chat}>
            <ChatHeader title={userInfo.title} />

            <div className={styles.messageWrapper}>
                {chat.loading && (
                    <div className={styles.spinnerWrapper}>
                        <Spinner size="m" theme="dark" />
                    </div>
                )}
                {!chat.loading && <MessageList list={currentChat} />}
            </div>

            <div>
                <NewMessage onSend={(msg) => sendNewMessage(msg, userInfo.id)} />
            </div>
        </div>
    );
}

export default Chat;
