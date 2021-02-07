import React from 'react';
import './App.scss';
import { AppWrapper } from './App.state';
import Chat from './components/chat/chat';
import { ChatWrapper } from './components/chat/chat.state';
import Details from './components/details/details';
import Sidepanel from './components/sidepanel/sidepanel';
import { SidepanelWrapper } from './components/sidepanel/sidepanel.state';

function App() {
    return (
        <AppWrapper>
            <div className="app">
                <SidepanelWrapper>
                    <Sidepanel />
                </SidepanelWrapper>
                <ChatWrapper>
                    <Chat />
                </ChatWrapper>
                {/* <Details /> */}
            </div>
        </AppWrapper>
    );
}

export default App;
