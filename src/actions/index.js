// action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

//action creators
export const addMessage = message => ({
    type: 'ADD_MESSAGE',
    message
});

export const removeMessage = id => ({
    type: 'REMOVE_MESSAGE',
    id
});