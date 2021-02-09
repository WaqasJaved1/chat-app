import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../App.state';
import usePrevious from '../../../../hooks/usePreviousState';
import SendIcon from '../../../../icons/send-icon';
import { useChatContext } from '../../chat.state';
import styles from './new-message.module.scss';

const ENTER_KEY_CODE = 13;
interface NewMessageProps {
    onSend?: (msg: string) => void;
}

function NewMessage(Props: NewMessageProps) {
    const { onSend } = Props;

    const { getDraft, updateDraft } = useChatContext();
    const { userInfo } = useAppContext();

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

    const val = usePrevious(userInfo.id);

    useEffect(() => {
        if (val) {
            updateDraft(val, message);
        }
        setMessage(getDraft(userInfo.id));
    }, [userInfo]);

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
