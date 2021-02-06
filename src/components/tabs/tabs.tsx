import React, { ReactChild } from 'react';
import HistoryIcon from '../../icons/history-icon';
import PeopleIcon from '../../icons/people-icon';
import styles from './tabs.module.scss';

interface Props {
    children: ReactChild;
}

function Tabs(props: Props) {
    const { children } = props;
    return (
        <div className={styles.tabs}>
            <div className={styles.header}>
                <button>
                    <HistoryIcon size="20px" color="white" />
                </button>
                <button>
                    <PeopleIcon size="24px" color="white" />
                </button>
            </div>

            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Tabs;
