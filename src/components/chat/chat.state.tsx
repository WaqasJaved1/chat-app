import React, { createContext, useContext, useEffect, useState } from 'react';
import { UiState } from '../../type';
import { MessageProps } from './list/message/message';

interface ChatContextValue {
    chat: UiState<MessageProps[]>;
    sendNewMessage: (text: string, to: number) => void;
}

const ChatContext: any = createContext<null | ChatContextValue>(null);

export function ChatWrapper({ children }: any) {
    const [chat, setChat] = useState<UiState<MessageProps[]>>({ loading: true, error: false });

    useEffect(() => {
        loadChat();
    }, []);

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
                            text: 'Hey',
                            image: 'https://picsum.photos/100?id=1',
                            position: 'left',
                        },
                        {
                            id: 2,
                            text: 'Hi',
                            image: 'https://picsum.photos/100?id=2',
                            position: 'right',
                        },
                        {
                            id: 3,
                            text: 'How are you?',
                            image: 'https://picsum.photos/100?id=1',
                            position: 'left',
                        },
                        {
                            id: 4,
                            text: 'I am good wau?',
                            image: 'https://picsum.photos/100?id=2',
                            position: 'right',
                        },
                        {
                            id: 5,
                            text: 'Me good',
                            image: 'https://picsum.photos/100?id=1',
                            position: 'left',
                        },
                    ],
                });
            }, 2000);
        }
    };

    const sendNewMessage = (text: string, to: number) => {
        if (chat.data) {
            setChat({
                ...chat,
                data: [
                    ...chat.data,
                    {
                        id: chat.data.length + 1,
                        text,
                        image: 'https://picsum.photos/100?id=2',
                        position: 'right',
                    },
                ],
            });
        }
    };

    const sharedState: ChatContextValue = {
        chat,
        sendNewMessage,
    };
    return <ChatContext.Provider value={sharedState}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
    return useContext<ChatContextValue>(ChatContext);
}
