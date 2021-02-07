import React, { useState } from 'react';
import SendIcon from '../../../../icons/send-icon';
import styles from './new-message.module.scss';

const ENTER_KEY_CODE = 13;
interface NewMessageProps {
    onSend?: (msg: string) => void;
}

function NewMessage(Props: NewMessageProps) {
    const { onSend } = Props;

    const [message, setMessage] = useState('');

    const _handleOnSend = () => {
        const msg = message.trim();
        if (msg) {
            onSend && onSend(message);

            setMessage('');
        }
    };

    const _handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.keyCode === ENTER_KEY_CODE) {
            _handleOnSend();
        }
    };

    return (
        <div className={styles.newMessage}>
            <input
                value={message}
                placeholder="Type your message here"
                onKeyDown={_handleKeyDown}
                onChange={(ev) => setMessage(ev.target.value)}
            />

            <button className="btn-round" onClick={_handleOnSend}>
                <SendIcon size="14px" color="white" />
            </button>
        </div>
    );
}

export default NewMessage;
