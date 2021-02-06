import React from 'react';
import './App.scss';
import Chat from './components/chat/chat';
import Details from './components/details/details';
import History from './components/history/history';

function App() {
    return (
        <div className="app">
            <History />
            <Chat />
            <Details />
        </div>
    );
}

export default App;
