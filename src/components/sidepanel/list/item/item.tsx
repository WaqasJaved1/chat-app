import React from 'react';
import { useAppContext } from '../../../../App.state';
import styles from './item.module.scss';
import cx from 'classnames';

export interface ItemProps {
    id: number;
    title: string;
    image: string;
    description?: string;
    badge?: string | number;
}

function Item(Props: ItemProps) {
    const { id, title, image, description, badge } = Props;

    const { userInfo, setUserInfo } = useAppContext();

    return (
        <button className={cx(styles.item, userInfo.id === id ? 'selected' : '')} onClick={() => setUserInfo(Props)}>
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
