import * as C from './constants';

export var addNote = (note) => {
    return {
        type: C.ADD_NOTE,
        note: note
    };
};

export var deleteNote = (noteIndex) => {
    return {
        type: C.DELETE_NOTE,
        noteIndex: noteIndex
    };
};

export var updateNote = (noteText, noteIndex) => {
    return {
        type: C.UPDATE_NOTE,
        noteIndex,
        noteText
    };
};