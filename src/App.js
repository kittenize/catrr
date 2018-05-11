import React from 'react';
import './App.css';

import ApolloTimelineContainer from './containers/ApolloTimelineContainer';
import ApolloMessageInputContainer from './containers/ApolloMessageInputContainer';
import ReduxTimelineContainer from './containers/ReduxTimelineContainer';
import ReduxMessageInputContainer from './containers/ReduxMessageInputContainer';
import glamorous from 'glamorous';
import {colors} from './constants';

import {Provider} from 'react-redux';
import {createStore } from 'redux';
import app from './reducers';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql'
});

const store = createStore(app);

const Navbar = glamorous.div({
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#222',
    height: '80px',
    color: 'white'
});

const Column = glamorous.div({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const ColumnBody = glamorous.div({
    width: '100%',
    maxWidth: '50vw',
    padding: '15px',
    boxSizing: 'border-box'
});

const ColumnHeader = glamorous.h1({
    backgroundColor: colors.dark,
    color: '#D5CFB7',
    padding: '15px',
    boxSizing: 'border-box'
});

const App = () => {
    return (
        <glamorous.Div display="flex" flexDirection="column" alignItems="center">
            <Navbar>
                <h1>Catrr</h1>
            </Navbar>
            <glamorous.Div display="flex" minWidth="400px" width="90vw" maxWidth="90vw">
                <Column>
                    <Provider store={store}>
                        <ColumnBody>
                            <ColumnHeader>Redux</ColumnHeader>
                            <ReduxMessageInputContainer />
                            <ReduxTimelineContainer/>
                        </ColumnBody>
                    </Provider>
                </Column>
                <Column>
                    <ApolloProvider client={client}>
                        <ColumnBody>
                            <ColumnHeader>Apollo</ColumnHeader>
                            <ApolloMessageInputContainer />
                            <ApolloTimelineContainer />
                        </ColumnBody>
                    </ApolloProvider>
                </Column>
            </glamorous.Div>
        </glamorous.Div>
    );
};

export default App;
