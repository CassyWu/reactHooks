import React, { Component } from 'react';

class Example extends Component{
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
            </div>
        );
    }
}

export default Example;