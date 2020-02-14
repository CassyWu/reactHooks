import React, {Component} from 'react';

class Example extends Component{
    constructor(props){
        super(props);
        this.state = {
            innerWidth: 0,
            innerHeight: 0
        };
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange(){
        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        })
    }

    render(){
        return(
            <div>
                <h2>
                    window innerWidth: {this.state.innerWidth}<br/>
                    window innerHeight: {this.state.innerHeight}
                </h2>
            </div>
        );
    }
}

export default Example;