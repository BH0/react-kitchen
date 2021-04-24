import React from "react";
import { Component } from "react"; 

class DishImage extends Component {
    render() { 
        return ( 
            <img src={this.props.image} /> 
        );
    }
}
export default DishImage;