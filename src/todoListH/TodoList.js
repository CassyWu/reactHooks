import React, { useContext } from 'react';
import {TodoContext, ADD_ITEM} from './TodoReducer';

let inputVal;

function TodoList() {
    const {state, dispatch} = useContext(TodoContext);

    return(
        <div>
            <input type="text" id='todo' ref={el => inputVal = el}/>
            <button onClick={() => {dispatch({type: ADD_ITEM, payload: {id: state.nextId + 1, newItem: {id: state.nextId + 1, value: inputVal.value}}})}}>add Todo</button>
            <ul>
                {
                    state.itemList.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;