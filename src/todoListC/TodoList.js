import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNewItem} from "./actions";

class TodoList extends Component{
    constructor(){
        super();
        this.inputVal = null;
    }

    handleBtnClick(){
        this.props.AddItem(this.inputVal.value);
    }

    render() {
        return(
            <div>
                <input type="text" ref={el => this.inputVal = el}/>
                <button onClick={this.handleBtnClick.bind(this)}>Add Item</button>
                <ul>
                    {
                        this.props.todoList.list.map(item => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todoList: state
});

const mapDispatchToProps = dispatch => {
    return{
        AddItem: (inputVal) =>{
            dispatch(addNewItem(inputVal));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);