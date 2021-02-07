import React, { ReactChild } from 'react';
import styles from './tabs.module.scss';

export interface TabItem<T> {
    tab: T;
    icon: React.ReactChild;
}

export interface TabProps<T> {
    tabs: TabItem<T>[];
    currentTab: T;
    onChange: (event: T) => void;
}

function Tabs<T extends string>(
    props: TabProps<T> & {
        children: ReactChild;
    },
) {
    const { children, currentTab, tabs, onChange } = props;
    return (
        <div className={styles.tabs}>
            <div className={styles.header}>
                {tabs.map((e) => (
                    <button
                        onClick={() => onChange(e.tab)}
                        key={e.tab}
                        className={e.tab === currentTab ? 'selected' : ''}
                    >
                        {e.icon}
                    </button>
                ))}
            </div>

            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Tabs;
