import React, { Component } from 'react';

class RefDemo extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    handleClick = () => {
        alert(`input value is ${this.inputRef.current.value}`);
    };

    render() {
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}>Get Input Value</button>
            </div>
        );
    }
}

export default RefDemo;