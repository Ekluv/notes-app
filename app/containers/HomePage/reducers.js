import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './constants';
import Immutable from 'immutable';

const INITIAL_STATE = {list: [], active: null};

var notesReducer = (state=INITIAL_STATE, action) => {
    state = Immutable.fromJS(state);
    switch (action.type) {
        case ADD_NOTE:
            // return {...state, all: action.payload, active: action.payload[0]}; // ES6 way to clone obj
            state = state.update('list', list => list.push(action.note));
            break;
        case DELETE_NOTE:
            state = state.update('list', list => list.delete(action.noteIndex));
            break;
        case UPDATE_NOTE:
            state = state.update('list', list => list.set(action.noteIndex, action.noteText));
            break;
    }
    return state;
};

export default notesReducer;
