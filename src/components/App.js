import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { 
  getEvents, 
  extractLocations, 
  checkToken, 
  getAccessToken } 
  from '../api';
import { ModalFooter } from 'react-bootstrap';
import { WarningAlert } from './Alert';
import {
  ScatterChart, 
  XAxis, 
  YAxis, 
  Scatter, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer} 
  from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    } 
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount); 
  }

  componentWillUnmount(){
    this.mounted = false;
  }  

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };  

  render() {
    if (this.state.showWelcomeScreen === undefined)
    return <div className="App" />;
    return (
      <div className="App">
        <h1>LetsMeet</h1>
        <div>
        { !navigator.onLine ? (<WarningAlert text='You are offline! The displayed data might not be up to date.' />) : (<WarningAlert text=' ' />)}
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventCount={this.updateEventCount}/>

        {/* charts */}
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer width={'99%'} height={400}>
            <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" type="category" name="city" stroke="#145c5c"/>
              <YAxis dataKey="number" type ="number" name="number of events" stroke="#145c5c" allowDecimals={false}/>
              <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
              <Scatter name="Events per City" data={this.getData()} fill="black" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={this.state.events}/>
        <ModalFooter className="mt-5" style={{justifyContent: 'center'}}>
          <p style={{color: 'white'}}>Feel free to visit my Portfolio:</p>
          <a href="https://portfolio-tr.000webhostapp.com/" rel="noreferrer" style={{textDecoration: 'none'}} target="_blank">portfolio-tr.000webhostapp.com</a>
          </ModalFooter>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
 }
}

export default App;
