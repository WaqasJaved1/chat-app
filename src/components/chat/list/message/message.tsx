import React, { useEffect } from 'react';
import styles from './message.module.scss';

export interface MessageProps {
    id: number;
    text: string;
    image: string;
    position?: 'left' | 'right';
}

function Message(Props: MessageProps) {
    const { text, image, position } = Props;

    const messagesEndRef = React.createRef<HTMLDivElement>();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    useEffect(() => {
        scrollToBottom();
    });
    return (
        <div className={styles.message + ' ' + (position === 'left' ? styles.left : styles.right)} ref={messagesEndRef}>
            <div className={styles.text + ' ' + (position === 'left' ? styles.left : styles.right)}>{text}</div>

            <div className={styles.avatar}>
                <img src={image} />
            </div>
        </div>
    );
}

export default Message;
