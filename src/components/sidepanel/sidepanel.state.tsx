import React, { createContext, useContext, useEffect, useState } from 'react';
import { UiState } from '../../type';

interface SidepanelContextValue {
    history: UiState<any>;
    chat: UiState<any>;
}

const SidepanelContext: any = createContext<null | SidepanelContextValue>(null);

export function SidepanelWrapper({ children }: any) {
    const [history, setHistory] = useState<UiState<any>>({ loading: true, error: false, data: null });
    const [chat, setChat] = useState<UiState<any>>({ loading: true, error: false, data: null });

    useEffect(() => {
        loadHistory();
        loadChat();
    }, []);

    const loadHistory = async () => {
        if (history.data) {
            return;
        } else {
            // Mock Loading
            setHistory({ loading: true, error: false, data: null });
            setTimeout(() => {
                setHistory({
                    loading: false,
                    error: false,
                    data: [
                        {
                            id: 1,
                            title: 'Waqas Javed',
                            image: 'https://picsum.photos/100?id=1',
                            description: 'Hello',
                            badge: '3',
                        },
                        {
                            id: 2,
                            title: 'Nildo Junior',
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
        if (history.data) {
            return;
        } else {
            setChat({ loading: true, error: false, data: null });
            // Mock Loading
            setTimeout(() => {
                setChat({
                    loading: false,
                    error: false,
                    data: [
                        {
                            id: 1,
                            title: 'Waqas Javed',
                            image: 'https://picsum.photos/100?id=1',
                        },
                        {
                            id: 2,
                            title: 'Nildo Junior',
                            image: 'https://picsum.photos/100?id=2',
                        },
                        {
                            id: 3,
                            title: 'Mat Murphy',
                            image: 'https://picsum.photos/100?id=3',
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
