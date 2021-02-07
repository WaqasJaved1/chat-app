import React, { useState } from 'react';
import SearchIcon from '../../../icons/search-icon';
import CloseIcon from '../../../icons/close-icon';
import cx from 'classnames';

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

    const clear = () => {
        setSearchBy('');
        onChange && onChange('');
    };

    return (
        <div className={styles.search}>
            <SearchIcon size="24px" color="white" className={styles.searchIcon} />
            <input placeholder="Search" type="text" value={searchBy} onChange={_handleOnChange} />
            <button className={cx('btn-round', styles.clearBtn)} onClick={clear}>
                <CloseIcon size="12px" color="white" className={styles.clearIcon} />
            </button>
        </div>
    );
}

export default Search;
