import React, { Component } from 'react';

class ParentComponent extends Component{
    render(){
        return(
            <ChildComponent name ="This is Props"/>
        );
    }
}

const ChildComponent = (props) =>{
    return <p>{props.name}</p>
};

export default ParentComponent;