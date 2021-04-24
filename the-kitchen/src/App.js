import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Navbar from "./Navbar/Navbar"; 
  import PhoneIcon from "./PhoneIcon"; 
  import Menus from "./Menus/Menus"; 
  import Location from "./Location/Location"; 
  import './App.css';
import Slideshow from "./About/Slideshow";
import Bookings from "./Bookings/Bookings"; 
  
  function App() {
    return (
      <div className="App">
        <Router>
          <Navbar /> 
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/bookings">
              <BookingsPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer /> 
        </Router>
      </div>
    );
  }
  
  const Footer = props => 
  <footer className="footer"> 
    <div className="flex">
        <div>
          <PhoneIcon /> 
        </div>
          <div>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a> 
          </div>
        </div> 
          <p>&copy; 2015 jimmyskitcehn.com</p> 
  </footer>


  
  function Home() {
    return <div className="home">
            <div id="menus">
          <Menus /> 
        </div>
        {/* // Location component has its own ID which is "location" 
        <div id="location">
          <Location /> 
        </div>
        */}
          <Location /> 
    </div>;
  }

  const Employee = props => 
    <div className="employee">
    <div className="image">
        <img src={props.image} /> 
    </div>
    <div className="info">
        <div>
        <strong>{props.name}</strong> 
        </div> 
        <p>
        {props.description} 
        </p>
    </div>
    </div>
  
const About = () => 
    <div id="about">
        <div className="slideshow">
            <Slideshow /> 
        </div>
        <div className="staff container">
            <div className="columns">
                <div className="column">
                    <Employee name={"lorem"} image={"https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  /> 
                </div>
                <div className="column">
                    <Employee name={"lorem"} image={"https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  /> 
                </div>
                <div className="column">
                    <Employee name={"lorem"} image={"https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  /> 
                </div>
            </div>
        </div>
    </div>

  
  function BookingsPage() {
    return <div>
            <Bookings /> 
        </div>;
  }
  
  export default App;
  
  