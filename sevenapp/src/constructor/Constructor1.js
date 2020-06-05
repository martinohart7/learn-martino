import React, { Component } from 'react';

class Constructor1 extends Component {
    constructor(){
        super();
        this.state = {name : "Martino Hart"};
    }

    render(){
        return <p>This is Constructor </p>
    }
}

export default Constructor1;