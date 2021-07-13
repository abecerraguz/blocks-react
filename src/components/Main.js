import React, { Component } from 'react';
    
    
class Main extends Component{
    render(){
        return(
            <div className="main_content">
                { this.props.children }
            </div>
        );
    }
}
    
export default Main;
