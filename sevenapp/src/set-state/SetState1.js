import React, { Component } from 'react';

class SetState1 extends Component{
    constructor(){
        super();
            this.state = {
                title : "SetState Experiment",
            };
        
    }
    changeTitle = () =>{
        this.setState({
            title : "setState Experiment berhasil diubah"
        });
    }
    render(){
        return(
            <div>
                <p>{this.state.title}</p>
                <p>{this.state.subTitle}</p>
                <button onClick={this.changeTitle}>Ubah</button>
            </div>
        );
    }
}
export default SetState1;