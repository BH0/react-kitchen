import React from "react";
import { Component } from "react"; 
import { Link } from "react-router-dom"; 
import NavbarItem from "./NavbarItem"; 
import ScrollableItem from "./ScrollableItem"; 
// import Hamburger from "./Hamburger"; 
import PhoneIcon from "../PhoneIcon"; 
class Navbar extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            toggle: false  
        } 
    }
    toggleEvent = () => {
        /* for hamburger */ 
        this.setState({toggle: !this.state.toggle}); 
        console.log(this.state.toggle); 
    }
    render() { 
        return ( 
            <div>
                <div className="nav"> 
                    <nav className="">
                        <div className="">
                            {/* logo */}
                        </div>
                        <div id="" className="">
                            <div className="">
                                {
                                    (() => {
                                        /* bug: when window is resized and toggle is false, no nav will be displayed */
                                        if (!this.state.toggle) {
                                          return (
                                                <div className="desktop"> 
                                                    <Link to={"/home"}>
                                                        <img src="https://i.pinimg.com/originals/f4/9c/70/f49c70a96fc12d047d4a62ecc867517d.jpg" width="48" height="48" /> 
                                                    </Link>
                                                    <NavbarItem to={"/about"} text={"about"}/> 
                                                    <NavbarItem to={"/bookings"} text={"bookings"}/> 
                                                    <NavbarItem to={"/home"} text={"home"} /> 
                                                    <ScrollableItem href={"#location"} text={"Location & Opening Times"} /> 
                                                    <PhoneIcon /> 
                                                </div> )
                                        }  
                                    })()
                                }
                            </div>
                        </div>
                    </nav> 
                </div> 
            </div>
         );
    }
}

export default Navbar; 