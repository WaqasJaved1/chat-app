import React from 'react';
import SearchIcon from './../../../icons/search-icon';
import CloseIcon from './../../../icons/close-icon';

import styles from './search.module.scss';

function Search() {
    return (
        <div className={styles.search}>
            <SearchIcon size="24px" color="white" className={styles.searchIcon} />
            <input placeholder="Search" type="text" />
            <CloseIcon size="12px" color="white" className={styles.clearIcon} />
        </div>
    );
}

export default Search;
