import React, { createContext, useContext, useState } from 'react';
import { ItemProps } from './components/sidepanel/list/item/item';

interface AppContextValue {
    userInfo: ItemProps;
    setUserInfo: (userInfo: ItemProps) => void;
}

const AppContext: any = createContext<null | AppContextValue>(null);

export function AppWrapper({ children }: any) {
    const [userInfo, setUserInfo] = useState<ItemProps>({
        id: 2,
        title: 'Waqas Javed',
        image: 'https://picsum.photos/100?id=2',
    });

    const sharedState: AppContextValue = {
        userInfo,
        setUserInfo,
    };
    return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext<AppContextValue>(AppContext);
}
