// Main component 
import React from "react";
import { Component } from "react"; 
import MenuTabs from "./MenuTabs"; 
import Menu from "./Menu"; 

class Menus extends Component {
    state = {
        menu: "starter"
    }
    changeTab = menuName => {
        // console.log(menuName); 
        this.setState({menu: menuName}); 
    }
    render() { 
        return (
            <div className="menus">
                <MenuTabs changeTab={this.changeTab} text={"starter"} /> 
                <MenuTabs changeTab={this.changeTab} text={"main"} /> 
                <MenuTabs changeTab={this.changeTab} text={"desert"} /> 
                <Menu menu={this.state.menu} /> 
            </div>
        );
    }
}
 
export default Menus;