import React from "react";
import { Component } from "react"; 

class Slideshow extends Component {
    state = { 
        slides: ["", "https://images.pexels.com/photos/6353751/pexels-photo-6353751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/3745525/pexels-photo-3745525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        currentSlide: 1
     }
     changeSlide = slide => {
         this.setState({
             currentSlide: slide
         }); 
     }
     incSlide = () => {
        if (this.state.currentSlide >= this.state.slides.length - 1) {
            this.setState({currentSlide: 1})   
        } else {
            this.setState({currentSlide: this.state.currentSlide + 1})
        }
    }
     decSlide = () => {
         if (this.state.currentSlide < 2) {
            this.setState({currentSlide: this.state.slides.length - 1})   
        } else {
             this.setState({currentSlide: this.state.currentSlide - 1})
         }
    }
   render() { 
        return ( 
            <div className="slideshow container">
                <div className="image">
                    <img src={this.state.slides[this.state.currentSlide]} />
                </div>
                {/* arrows are bugged */}
                <div className="slideshow-controls">
                    <ArrowLeft decSlide={this.decSlide} />  
                    {this.state.slides.map((slides, index) => {
                            if (index >= 1) {
                                return (<div className="dot">
                                    <Dot changeSlide={this.changeSlide} slide={index} /> 
                                </div>); 
                            } 
                    })}
                    <ArrowRight incSlide={this.incSlide} />  
                </div>
                <div className="center">
                    <strong>
                        {this.state.currentSlide} / {this.state.slides.length - 1} 
                    </strong>
                </div>
            </div>
         );
    }
}

const Dot = props => {
    return (
        <div className="slideshow dot" onClick={() => props.changeSlide(props.slide)}>
            <i class="fas fa-circle"></i> 
            {
                /* ideally, the icon will change to alternative circle */
            }
        </div>  
    )
}

const ArrowRight = props => {
    return (<div onClick={props.incSlide}>
        <i className="fas fa-chevron-right"></i>
    </div>)
}
const ArrowLeft = props => {
    return (<div onClick={props.decSlide}>
        <i className="fas fa-chevron-left"></i>
    </div>)
} 

export default Slideshow;