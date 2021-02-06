import React from 'react';
import Tabs from '../tabs/tabs';
import HistoryHeader from './header/header';
import styles from './history.module.scss';
import List from './list/list';
import Search from './search/search';

function History() {
    return (
        <div className={styles.history}>
            <div className={styles.headerWrapper}>
                <HistoryHeader />
            </div>
            <div className={styles.searchWrapper}>
                <Search />
            </div>

            <div className={styles.tabsWrapper}>
                <Tabs>
                    <div className={styles.tabWrapper}>
                        <List />
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default History;
