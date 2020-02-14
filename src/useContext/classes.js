import React, { Component } from 'react';
import { ParentContext } from './CommonContext'

class Parent extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h2>You clicked { this.state.count } times</h2>
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>Click me</button>
                <ParentContext.Provider value={this.state.count}>
                    <Child/>
                </ParentContext.Provider>
            </div>
        );
    }
}

export default Parent;


class Child extends Component{
    static contextType =  ParentContext;

    render() {
        return (
            <div>
                <h3>parent component click {this.context} times</h3>
            </div>
        );
    }
}