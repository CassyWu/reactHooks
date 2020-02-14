export const ADD_ITEM = 'add_item';

export const addNewItem = (inputVal) => ({
    type: ADD_ITEM,
    payload: inputVal
});