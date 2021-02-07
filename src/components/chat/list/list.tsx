import React from 'react';
import Message, { MessageProps } from './message/message';
import styles from './list.module.scss';

interface MessageListProps {
    list?: MessageProps[];
}

function MessageList(Props: MessageListProps) {
    const { list } = Props;

    return (
        <ul className={styles.Messagelist}>
            {list &&
                list.map((e) => (
                    <li key={e.id}>
                        <Message {...e} />
                    </li>
                ))}
        </ul>
    );
}

export default MessageList;
