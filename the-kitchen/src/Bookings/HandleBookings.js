import React from "react";
import { Component } from "react"; 
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

class HandleBookings extends Component {
    render() { 
        return (  
            <div>
                <Formik
      initialValues={{ name: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
        let tableSize = null; 
        // in future, make a function to make this code more DRY 
        if (values["table_for_2"] == "on") {
            tableSize = "2"; // I doubt it matters that this is a string 
        } 
        if (values["table_for_4"] == "on") {
            tableSize = "4"; // I doubt it matters that this is a string 
        } 
        if (values["table_for_6"] == "on") {
            tableSize = "6"; // I doubt it matters that this is a string 
        } 
        // values.tableSize = tableSize; 
        values.size = tableSize; 
        console.log(values); 
        // I believe there is a bug where you have to manually to select a date and time (perhaps this won't be noticible if I had these values as initial values for Formik)
        this.props.handleBooking(values); 
        // send values to parent component 
      }}
    >
      {props => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;
        return (
            <div className="form container" id="book-table">
                <form onSubmit={handleSubmit}>
                <h1 className="heading title">Book a table</h1>
                <div className="field">
                    <label className="label" >Name</label>
                    <div className="control">
                    <input name="name" className="input" type="text" value={values.name} onChange={handleChange} />

                    </div>
                </div>
                <div className="field">
                    <label for="" className="label">Date</label>
                    <div className="control">
                        <input type="date" id="start" name="date"
                        defaultValue="2018-07-22"
                        min="2018-01-01" max="2018-12-31" value={values.date} onChange={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Time</label>
                    <div className="control">
                    <div className="select">
                        <select name="time" value={values.time} onChange={handleChange}>
                        <option>4pm</option>
                        <option>5pm</option>
                        <option>6pm</option>
                        </select>
                    </div>
                    </div>
                </div>
                
                <div className="field">
                    <div className="control columns">
                        <div className="column">
                        <label className="radio">
                            <input type="radio" name="table_for_2" values={values.tableForTwo} onChange={handleChange} />
                            table for 2
                        </label>
                        </div>
                        <div className="column">
                            {/* not satisfied with radio controls */}
                            <label className="radio">
                                <input type="radio" name="table_for_4" values={values.tableForFour} onChange={handleChange}  />
                                table for 4 
                                </label>
                            </div>
                        <div className="column">
                            <label className="radio">
                                <input type="radio" name="table_for_6" values={values.tableForSix} onChange={handleChange} />
                                table for 6 
                                </label>
                            </div>
                        </div>
                </div>
                
                <div className="field">
                    <div className="control">
                     {/*
                    <button className="button is-link" onClick={this.handleBooking}>Submit</button>
                     */}   
                    <button className="" type="submit" disabled={isSubmitting}>
                    Submit
                    </button>

                    </div>
                </div>
            </form> 
            </div>
        );
      }}
    </Formik>

      </div>
        );
    }
}
 
export default HandleBookings;
