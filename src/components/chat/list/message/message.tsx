import React from 'react';
import styles from './message.module.scss';

interface Props {
    position?: 'left' | 'right';
}

function Message(Props: Props) {
    const { position } = Props;
    return (
        <div className={styles.message + ' ' + (position === 'left' ? styles.left : styles.right)}>
            <div className={styles.text + ' ' + (position === 'left' ? styles.left : styles.right)}>HELLO</div>

            <div className={styles.avatar}>
                <img src="https://picsum.photos/100" />
            </div>
        </div>
    );
}

export default Message;
