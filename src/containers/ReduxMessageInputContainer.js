import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import PropTypes from 'prop-types';
import MessageInput from '../components/MessageInput';

let ReduxMessageInputContainer = ({dispatch}) => {
    return (
        <MessageInput onSubmit={message => {
            dispatch(addMessage(message));
        }} />
    );
};

ReduxMessageInputContainer.propTypes = {
    dispatch: PropTypes.func
};

ReduxMessageInputContainer = connect()(ReduxMessageInputContainer);

export default ReduxMessageInputContainer;

