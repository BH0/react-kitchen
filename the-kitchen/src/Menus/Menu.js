import React from "react";
import { Component } from "react"; 
import MenuItem from "./MenuItem"; 
import DishImage from "./DishImage"; 

class Menu extends Component {
    state = {  
        // image is currently displayed image 
        image: window.location.origin + "/images/food-name.jpeg",
        // perhaps image file path should be included as a property of menu item? 
        starter: [{
            name: "starter item 1", 
            price: 10, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        },
        {
            name: "starter item 2", 
            price: 20, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }, 
        {
            name: "starter item 3", 
            price: 30, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }],  
        main: [{
            name: "main item 1", 
            price: 10, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        },
        {
            name: "main item 2", 
            price: 20, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }, 
        {
            name: "main item 3", 
            price: 30, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }],
        desert: [{
            name: "desert item 1", 
            price: 10, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        },
        {
            name: "desert item 2", 
            price: 20, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }, 
        {
            name: "desert item 3", 
            price: 30, 
            description: "lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum"
        }]  
    }
    changeDishImage = dishName => {
        // these images are being retrieved from public folder 
        let _image = window.location.origin + "/images/" + dishName.replace(/ /g, "-") + ".jpeg"; 
        this.setState({
            image: _image
        }); 
        console.log(this.state.image, _image); 
    } 
    render() { 
        return (
            <div className="columns">
                <div className="column dish-image">
                    <DishImage image={this.state.image} /> 
                </div>
                <div className="column">
                    <div class="heading">
                        <h1 class="title">Starters</h1>
                    </div> 
                    {this.state[this.props.menu].map(item => <MenuItem name={item.name} price={item.price} description={item.description} changeDishImage={this.changeDishImage} />)}
                </div>
            </div>
        );
    }
}
 
export default Menu;
