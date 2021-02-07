import React from 'react';
import './App.scss';
import Chat from './components/chat/chat';
import Details from './components/details/details';
import Sidepanel from './components/sidepanel/sidepanel';
import { SidepanelWrapper } from './components/sidepanel/sidepanel.state';

function App() {
    return (
        <div className="app">
            <SidepanelWrapper>
                <Sidepanel />
            </SidepanelWrapper>
            <Chat />
            {/* <Details /> */}
        </div>
    );
}

export default App;
