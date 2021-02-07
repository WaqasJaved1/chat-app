import React from 'react';
import styles from './item.module.scss';

export interface ItemProps {
    id: number;
    title: string;
    image: string;
    description?: string;
    badge?: string | number;
}

function Item(Props: ItemProps) {
    const { title, image, description, badge } = Props;

    return (
        <button className={styles.item}>
            <div className={styles.avatar}>
                <img src={image} />
            </div>
            <div className={styles.content}>
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                {badge && <div className={styles.badge}>{badge}</div>}
            </div>
        </button>
    );
}

export default Item;
