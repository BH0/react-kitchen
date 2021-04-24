import React from "react";
import { Component } from "react"; 

class MenuItem extends Component {
    render() { 
        return ( 
            <div onClick={() => this.props.changeDishImage(this.props.name)}>
                                <div class="food-item" id="food-item">
                    <div class="name-and-price columns">
                        <div class="column name"><strong>Food name</strong></div>
                            <div class="column price is-pulled-right"><strong>£20</strong></div>
                        </div>                    
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, libero?</p>
                        </div> 
                    </div>

            </div>
         );
    }
}
 
export default MenuItem;