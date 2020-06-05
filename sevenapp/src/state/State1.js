import React, { Component } from 'react';

class State1 extends Component{
    constructor(){
        super();
        this.state = {
            title : "Learn",
            subTitle : "This is State"
        };
    }
    render() {
        return (
             <div>
                 <br/>
                 <p>{this.state.title}</p>
                 <p>{this.state.subTitle}</p>
             </div>
        );
    }
}

export default State1;