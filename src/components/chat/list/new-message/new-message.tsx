import React from 'react';
import SendIcon from '../../../../icons/send-icon';
import styles from './new-message.module.scss';

function NewMessage() {
    return (
        <div className={styles.newMessage}>
            <input placeholder="Type your message here" />

            <button className="btn-round">
                <SendIcon size="14px" color="white" />
            </button>
        </div>
    );
}

export default NewMessage;
