import React from 'react';
import './App.css';
import MessageInputContainer from './containers/MessageInputContainer';
import TimelineContainer from './containers/TimelineContainer';
import glamorous from 'glamorous';

import {Provider} from 'react-redux';
import {createStore } from 'redux';
import app from './reducers';

const store = createStore(app);

const Navbar = glamorous.div({
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#222',
    height: '80px',
    color: 'white'
});

const App = () => {
    return (
        <Provider store={store}>
            <glamorous.Div display="flex" flexDirection="column" alignItems="center">
                <Navbar>
                    <h1>Catrr</h1>
                </Navbar>
                <glamorous.Div width="600px" maxwidth="100vw">
                    <MessageInputContainer />
                    <TimelineContainer/>
                </glamorous.Div>
            </glamorous.Div>
        </Provider>
    );
};

export default App;
