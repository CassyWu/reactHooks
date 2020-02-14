import React, {createContext, useReducer} from 'react';

export const ADD_ITEM = 'add_item';
export const TodoContext = createContext([]);

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                nextId: action.payload.id,
                itemList: [...state.itemList, action.payload.newItem]
            };
        default:
            return state;
    }
};

const initialState = {
    nextId: 0,
    itemList: []
};

export const TodoReducer = props => {
    const[state, dispatch] = useReducer(reducer, initialState);

    return(
        <TodoContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
};