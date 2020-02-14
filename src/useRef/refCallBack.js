import React, { Component } from 'react';

class RefDemo extends Component{
    constructor(props){
        super(props);
        this.inputRef = null;
    }

    handleClick = () => {
        alert(`input value is ${this.inputRef.value}`);
    };

    render() {
        return(
            <div>
                <input type="text" ref={el => {this.inputRef = el}}/>
                <button onClick={this.handleClick}>Get Input Value</button>
            </div>
        );
    }
}

export default RefDemo;