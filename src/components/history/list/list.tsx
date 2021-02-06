import React from 'react';
import Item from './item/item';
import styles from './list.module.scss';

function List() {
    return (
        <ul className={styles.list}>
            {[0, 1, 2, 4, 5, 6, 7, 8, 9].map((e) => (
                <li key={e}>
                    <Item />
                </li>
            ))}
        </ul>
    );
}

export default List;
