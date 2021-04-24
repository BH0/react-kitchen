import React from "react";
import { Component } from "react"; 

class Tabs extends Component {
    render() { 
        return ( 
            <button className="tab" onClick={() => this.props.changeTab(this.props.text)}>
                {this.props.text}                
            </button>
         );
    }
}
 
export default Tabs;