import React, { createContext, useContext, useEffect, useState } from 'react';
import { UiState } from '../../type';
import { MessageProps } from './list/message/message';

interface ChatContextValue {
    chat: Record<string, MessageProps[]>;
    loadChat: (id: number) => Promise<MessageProps[]>;
    sendNewMessage: (text: string, to: number) => void;
    updateDraft: (id: number, msg: string) => void;
    getDraft: (id: number) => string;
}

const ChatContext: any = createContext<null | ChatContextValue>(null);

export function ChatWrapper({ children }: any) {
    const [chat, setChat] = useState<Record<string, MessageProps[]>>({});
    const [draft, setDraft] = useState<Record<string, string>>({});

    const loadChat = async (id: number) => {
        return new Promise<MessageProps[]>((resolve, reject) => {
            if (chat[id.toString()]) {
                resolve(chat[id.toString()]);
            } else {
                const apiResponse: MessageProps[] = [
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
                ];
                setChat({
                    ...chat,
                    [id]: apiResponse,
                });

                resolve(apiResponse);
            }
        });
    };

    const updateDraft = (id: number, msg: string) => {
        setDraft({
            ...draft,
            [id]: msg,
        });
    };

    const getDraft = (id: number) => {
        return draft[id] ? draft[id] : '';
    };

    const sendNewMessage = (text: string, to: number) => {
        setChat({
            ...chat,
            [to]: [
                ...(chat[to] ? chat[to] : []),
                { id: chat[to].length + 1, text, image: 'https://picsum.photos/100?id=2', position: 'right' },
            ],
        });
    };

    const sharedState: ChatContextValue = {
        chat,
        loadChat,
        sendNewMessage,
        updateDraft,
        getDraft,
    };
    return <ChatContext.Provider value={sharedState}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
    return useContext<ChatContextValue>(ChatContext);
}
