import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions';

const initialState =  [{
    username: 'cat2',
    message: 'first message',
    date: (new Date()).getTime(),
    id: 'rpQFXw'
}, {
    username: 'dog',
    message: 'second',
    date: (new Date()).getTime(),
    id: 'UXCGW7'
}];


function messageReducers(state = initialState, action){
    switch(action.type){
    case ADD_MESSAGE:
        return [
            Object.assign({}, action.message),
            ...state
        ];
    case REMOVE_MESSAGE:
        return state.filter(c => c.id !== action.id);
    default:
        return state;
    }
}


export default messageReducers;