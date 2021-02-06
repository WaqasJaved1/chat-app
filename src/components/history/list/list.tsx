import React from 'react';
import ItemA from './item/item';
import styles from './list.module.scss';

function List() {
    return (
        <ul className={styles.list}>
            {[0, 1, 2, 4].map((e) => (
                <li key={e}>
                    <ItemA />
                </li>
            ))}
        </ul>
    );
}

export default List;
