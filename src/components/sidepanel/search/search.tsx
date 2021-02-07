import React, { useState } from 'react';
import SearchIcon from '../../../icons/search-icon';
import CloseIcon from '../../../icons/close-icon';

import styles from './search.module.scss';

interface SearchProps {
    onChange?: (str: string) => void;
}

function Search(Props: SearchProps) {
    const { onChange } = Props;
    const [searchBy, setSearchBy] = useState('');

    const _handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBy(event.target.value);
        onChange && onChange(event.target.value);
    };

    return (
        <div className={styles.search}>
            <SearchIcon size="24px" color="white" className={styles.searchIcon} />
            <input placeholder="Search" type="text" value={searchBy} onChange={_handleOnChange} />
            <CloseIcon size="12px" color="white" className={styles.clearIcon} />
        </div>
    );
}

export default Search;
