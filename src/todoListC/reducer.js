import {ADD_ITEM} from "./actions";

const initialState = {
    list: []
};

const todo =  (state = initialState, action) => {
    let newList = state.list;
    switch (action.type) {
        case ADD_ITEM:
            newList.push(action.payload);
            return{
                ...state,
                list: newList
            };
        default:
            return state;
    }
};

export default todo;