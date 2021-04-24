import React from "react";
import { Component } from "react"; 

class ScrollableItem extends Component {
    scrollTo = () => {
        let element = document.getElementById(this.props.href.split("#")[1]);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });        
        } 
    }
    render() { 
        return (<div className="nav-item">
            {/* href matches the ID of the container element to scroll to (may rename href prop) */}
            <button onClick={this.scrollTo} href={this.props.href}>{this.props.text}</button>
        </div>);
    }
}
 
export default ScrollableItem;
