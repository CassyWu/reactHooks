import React, { useReducer } from 'react';

function useReducerDemo() {
    const [state, dispatch] = useReducer((state, action)=>{
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    return(
        <div>
            <p>current count is {state}</p>
            <button onClick={() => {dispatch('add')}}>Add</button>
            <button onClick={() => {dispatch('sub')}}>Subtract</button>
        </div>
    )
}

export default useReducerDemo;