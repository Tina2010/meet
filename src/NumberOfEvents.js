import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
      numberOfEvents: 32
      }

      toggleAmountOfEvents = (event) => {
        const number = event.target.value;
        if (number > -1 && number < 33) {
        this.setState({ 
          numberOfEvents: number,
        });
        this.props.updateEventCount(event.target.value);
        } else {
          alert('Please enter a number between 0 and 32!')
        }
      };


    render() {
        return (
          <div className="numberOfEvents" style={{marginBottom: '20px'}}>
            <p style={{"paddingRight":"5px"}}>Number of Events:</p>
            <input 
                type="number"
                className="amountEventsOnePage"
                value={this.state.numberOfEvents}
                onChange={(e) => this.toggleAmountOfEvents(e)}
            />
          </div>
        );
      }
}

export default NumberOfEvents;