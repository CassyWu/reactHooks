import React from 'react';
import { TodoReducer } from "./TodoReducer";
import TodoList from "./TodoList";

function HookDemo() {
    return(
        <TodoReducer>
            <TodoList/>
        </TodoReducer>
    )
}

export default HookDemo;