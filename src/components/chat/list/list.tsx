import React from 'react';
import Message from './message/message';
import styles from './list.module.scss';

function MessageList() {
    return (
        <ul className={styles.Messagelist}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((e) => (
                <li key={e}>
                    <Message position={e % 2 === 0 ? 'left' : 'right'} />
                </li>
            ))}
        </ul>
    );
}

export default MessageList;
