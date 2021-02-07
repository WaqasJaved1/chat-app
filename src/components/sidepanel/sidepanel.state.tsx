import React, { createContext, useContext, useEffect, useState } from 'react';
import { UiState } from '../../type';
import { ItemProps } from './list/item/item';

interface SidepanelContextValue {
    history: UiState<ItemProps[]>;
    chat: UiState<ItemProps[]>;
}

const SidepanelContext: any = createContext<null | SidepanelContextValue>(null);

export function SidepanelWrapper({ children }: any) {
    const [history, setHistory] = useState<UiState<ItemProps[]>>({ loading: true, error: false });
    const [chat, setChat] = useState<UiState<ItemProps[]>>({ loading: true, error: false });

    useEffect(() => {
        loadHistory();
        loadChat();
    }, []);

    const loadHistory = async () => {
        if (history.data) {
            return;
        } else {
            // Mock Loading
            setHistory({ loading: true, error: false });
            setTimeout(() => {
                setHistory({
                    loading: false,
                    error: false,
                    data: [
                        {
                            id: 1,
                            title: 'Nildo Junior',
                            image: 'https://picsum.photos/100?id=1',
                            description: 'Hello',
                            badge: '3',
                        },
                        {
                            id: 2,
                            title: 'Waqas Javed',
                            image: 'https://picsum.photos/100?id=2',
                            description: 'Typing...',
                            badge: undefined,
                        },
                        {
                            id: 3,
                            title: 'Mat Murphy',
                            image: 'https://picsum.photos/100?id=3',
                            description: 'Hey Waqas',
                            badge: undefined,
                        },
                    ],
                });
            }, 2000);
        }
    };

    const loadChat = async () => {
        if (chat.data) {
            return;
        } else {
            setChat({ loading: true, error: false });
            // Mock Loading
            setTimeout(() => {
                setChat({
                    loading: false,
                    error: false,
                    data: [
                        {
                            id: 1,
                            title: 'Nildo Junior',
                            image: 'https://picsum.photos/100?id=1',
                        },
                        {
                            id: 2,
                            title: 'Waqas Javed',
                            image: 'https://picsum.photos/100?id=2',
                        },
                        {
                            id: 3,
                            title: 'Mat Murphy',
                            image: 'https://picsum.photos/100?id=3',
                        },
                        {
                            id: 4,
                            title: 'John',
                            image: 'https://picsum.photos/100?id=4',
                        },
                        {
                            id: 5,
                            title: 'Rachel Green',
                            image: 'https://picsum.photos/100?id=5',
                        },
                        {
                            id: 6,
                            title: 'Joey',
                            image: 'https://picsum.photos/100?id=6',
                        },
                        {
                            id: 7,
                            title: 'Monica Gellar',
                            image: 'https://picsum.photos/100?id=7',
                        },
                        {
                            id: 8,
                            title: 'Thomas Shelby',
                            image: 'https://picsum.photos/100?id=8',
                        },
                        {
                            id: 9,
                            title: 'Arthur Shelby',
                            image: 'https://picsum.photos/100?id=9',
                        },
                        {
                            id: 10,
                            title: 'John Shelby',
                            image: 'https://picsum.photos/100?id=10',
                        },
                    ],
                });
            }, 2000);
        }
    };

    const sharedState: SidepanelContextValue = {
        history,
        chat,
    };
    return <SidepanelContext.Provider value={sharedState}>{children}</SidepanelContext.Provider>;
}

export function useSidepanelContext() {
    return useContext<SidepanelContextValue>(SidepanelContext);
}
