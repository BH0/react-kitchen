import React from "react";
import { Component } from "react"; 
import HandleBookings from "./HandleBookings"; 

class Bookings extends Component {
    state = {
        bookings: [
            { name: "clyde", time: "19:00", date: "02/02/2020", size: "4" }, 
            { name: "clyde", time: "19:00", date: "02/02/2020", size: "4" }, 
            { name: "clyde", time: "19:00", date: "02/02/2020", size: "4" }, 
            { name: "clyde", time: "19:00", date: "02/02/2020", size: "4" } 
        ]
    } 
    componentDidMount() {
        this.setState({
            bookings: JSON.parse(localStorage.getItem('the_kitchen_bookings'))
        })
    }
    handleBooking = booking => {
        let _booking = {
            name: booking["name"], time: booking["time"], date: booking["date"], size: booking["size"]
        } 
        console.log(_booking); 
        let _bookings = this.state.bookings.concat(_booking); 
        this.setState({
            bookings: _bookings
        }); 
        /* 
        bug: time is displayed twice & date + table size are not displayed 
        */
        localStorage.setItem('the_kitchen_bookings', JSON.stringify(this.state.bookings)); 
    } 
    render() { 
        return ( 
            <div>
                <div className="handle-bookings">
                    <HandleBookings handleBooking={this.handleBooking} /> 
                </div>
                <div className="bookings" id="bookings">
                <h1 className="heading title is-4">Your booking/s</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Table size</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bookings.map(_booking => {
                                return (
                                    <div>
                                        <Booking name={_booking.name} time={_booking.time} date={_booking.date} tableSize={_booking.tableSize} /> 
                                    </div>
                                ); 
                            })
                        }
                    </tbody>
                </table> 
            </div>
        </div>
        );
    }
}
 
export default Bookings;

const Booking = props => 
    <div>
        <tr>
            <td>{props.name}</td>
            <td>{props.time}</td>
            <td>{props.time}</td>
            <td>{props.tableSize}</td>
        </tr>
    </div>