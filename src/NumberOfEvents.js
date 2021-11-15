import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: '',
        manualAmountEvents: 2
      }

    toggleAmountOfEvents = (events) => {
        const value = events.target.value;
        this.setState({
          manualAmountEvents : value
        });
      };

    render() {
        return (
          <div className="numberOfEvents">
            <p style={{"paddingRight":"5px"}}>Number of Events:</p>
            <input 
                type="number"
                className="amountEventsOnePage"
                value={this.state.manualAmountEvents}
                onChange={this.toggleAmountOfEvents}
            />
          </div>
        );
      }
}

export default NumberOfEvents;