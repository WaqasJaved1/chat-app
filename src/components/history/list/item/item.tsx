import React from 'react';
import styles from './item.module.scss';

function Item() {
    return (
        <button className={styles.item}>
            <div className={styles.avatar}>
                <img src="https://picsum.photos/100" />
            </div>
            <div className={styles.content}>
                <div className={styles.details}>
                    <div className={styles.title}>Waqas Javed</div>
                    <div className={styles.description}>Hello</div>
                </div>
                <div className={styles.badge}>2</div>
            </div>
        </button>
    );
}

export default Item;
