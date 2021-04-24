import React from "react"; 
import { Component, Fragment } from "react"; 
import { Link } from "react-router-dom";

class NavbarItem extends Component {
    render() { 
        return ( 
            <div className="">
                <Link  to={this.props.to}>
                        {this.props.text} | {this.props.to} | {this.canScroll} 
                </Link>
            </div>
         );
    }
}
 
export default NavbarItem;