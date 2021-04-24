// Main Component 
import React from "react";
import { Component } from "react"; 

class Location extends Component {
    render() { 
        return ( 
            <div id="location" className="location">
                <div className="columns">
                    <div className="column">
                        <Map /> 
                    </div>
                    <div className="column">
                        <OpeningTimes /> 
                    </div>
                    <div className="column">
                        <Images />                     
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Location;

// functional components 
const Map = props => <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142872.1417001874!2d-4.7057164496029324!3d55.97749374769166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2376c80cee4345f1!2sMcDonald&#39;s%20Greenock%201!5e0!3m2!1sen!2suk!4v1616867652927!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
</div> 

const OpeningTimes = props => <div id="opening-times" className="opening-times">
    <ul>
        <li>Monday: <strong>Open 3pm - 8pm</strong></li>
        <li>Monday: <strong>Open 3pm - 8pm</strong></li>
        <li>Monday: <strong>Open 3pm - 8pm</strong></li>
        <li>Monday: <strong>Open 3pm - 8pm</strong></li>
        <li>Monday: <strong>Open 3pm - 8pm</strong></li>
    </ul>
</div> 

// is a name this vague appropriate ? 
const Images = props => <div>
        <div>
            <img src="https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> 
        </div>
        <div>
            <img src="https://images.pexels.com/photos/3465604/pexels-photo-3465604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> 
        </div>
</div>
