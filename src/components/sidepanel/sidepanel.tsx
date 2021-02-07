import React, { useState } from 'react';
import HistoryIcon from '../../icons/history-icon';
import PeopleIcon from '../../icons/people-icon';
import Spinner from '../spinner/spinner';
import Tabs, { TabProps } from '../tabs/tabs';
import SidepanelHeader from './header/header';
import styles from './history.module.scss';
import List from './list/list';
import Search from './search/search';
import { useSidepanelContext } from './sidepanel.state';

type Tabs = 'history' | 'chat';

function Sidepanel() {
    const [currentTab, setCurrentTab] = useState<Tabs>('history');
    const [searchBy, setSearchBy] = useState('');

    const { history, chat } = useSidepanelContext();

    const tabsProps: TabProps<Tabs> = {
        onChange: setCurrentTab,
        tabs: [
            { tab: 'history', icon: <HistoryIcon size="20px" color="white" /> },
            { tab: 'chat', icon: <PeopleIcon size="20px" color="white" /> },
        ],
        currentTab,
    };

    return (
        <div className={styles.history}>
            <div className={styles.headerWrapper}>
                <SidepanelHeader />
            </div>
            <div className={styles.searchWrapper}>
                <Search onChange={setSearchBy} />
            </div>

            <div className={styles.tabsWrapper}>
                <Tabs {...tabsProps}>
                    <div className={styles.tabWrapper}>
                        {(history.loading || chat.loading) && (
                            <div className={styles.spinnerWrapper}>
                                <Spinner size="m" theme="light" />
                            </div>
                        )}
                        {!history.loading && currentTab === 'history' && (
                            <List elements={history.data} searchBy={searchBy} />
                        )}
                        {!chat.loading && currentTab === 'chat' && <List elements={chat.data} searchBy={searchBy} />}
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default Sidepanel;
