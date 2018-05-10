import React from 'react';
import './App.css';
import TimelineContainer from './components/TimelineContainer';
import glamorous from 'glamorous';

const Navbar = glamorous.div({
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#222',
    height: '80px',
    color: 'white'
});

const App = () => {
    return (
        <glamorous.Div display="flex" flexDirection="column" alignItems="center">
            <Navbar>
                <h1>Catrr</h1>
            </Navbar>
            <TimelineContainer width="600px" maxWidth="100vw"/>
        </glamorous.Div>
    );
};

export default App;
