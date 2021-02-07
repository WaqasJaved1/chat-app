import React, { useState } from 'react';
import useSearchHook from '../../../hooks/useSearchHook';
import Item, { ItemProps } from './item/item';
import styles from './list.module.scss';

interface ListProps {
    elements?: ItemProps[];
    searchBy?: string;
}

function List(Props: ListProps) {
    const { elements, searchBy } = Props;

    const [list, setList] = useState<ItemProps[] | undefined>([]);

    if (elements) {
        useSearchHook(elements, searchBy, (e) => {
            setList(e);
        });
    }

    return (
        <ul className={styles.list}>
            {list &&
                list.map((e) => (
                    <li key={e.id}>
                        <Item {...e} />
                    </li>
                ))}
        </ul>
    );
}

export default List;
