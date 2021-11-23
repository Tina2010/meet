import React, { Component } from 'react';
import '../css/NumberOfEvents.css';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
    state = {
      numberOfEvents: 32
      }

      toggleAmountOfEvents = (event) => {
        const number = event.target.value;
        if (number > 0 && number < 33) {
        this.setState({ 
          numberOfEvents: number,
          errorText: ''
        });
        this.props.updateEventCount(event.target.value);
        } else {
          this.setState({
            errorText: 'Please select a number from 1 - 32!'
          })
          this.props.updateEventCount(32);
        }
      };


    render() {
        return (
          <div style={{textAlign: '-webkit-center'}}>
            <div className="numberOfEvents">
              <h5>Choose the number of events you want to see, from currently 32: </h5>
              <input 
                  type="number"
                  className="amountEventsOnePage"
                  value={this.state.numberOfEvents}
                  onChange={(e) => this.toggleAmountOfEvents(e)}
              />
            </div>
              <ErrorAlert text={this.state.errorText} />
          </div>
        );
      }
}

export default NumberOfEvents;