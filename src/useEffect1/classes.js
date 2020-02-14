import React, {Component} from 'react';

class Example extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log(`You clicked ${this.state.count} times`);
    }

    componentDidUpdate(){
        console.log(`You clicked ${this.state.count} times`);
    }

    render(){
        return(
            <div>
                <h2>You clicked {this.state.count} times</h2>
                <button onClick={() => {this.setState({ count: this.state.count + 1})}}>Click me</button>
            </div>
        );
    }
}

export default Example;