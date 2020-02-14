import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import todo from './reducer';

const store = createStore(todo);

class ReduxDemo extends Component{
    render() {
        return (
            <Provider store={store}>
                <TodoList/>
            </Provider>
        );
    }

}

export default ReduxDemo;