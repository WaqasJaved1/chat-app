import { useEffect } from 'react';
import { ItemProps } from '../components/sidepanel/list/item/item';

const useSearchHook = (elements: ItemProps[], searchBy: string | undefined, callback: (a: ItemProps[]) => void) => {
    useEffect(() => {
        if (searchBy) {
            callback(
                elements.filter(
                    (e) =>
                        e.title.toLowerCase().includes(searchBy.toLowerCase()) ||
                        e.description?.toLowerCase().includes(searchBy.toLowerCase()),
                ),
            );
        } else {
            callback(elements);
        }
    }, [elements, searchBy]);
};

export default useSearchHook;
