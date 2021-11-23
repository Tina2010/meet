import React, { Component } from 'react';
import {InfoAlert} from './Alert';
import '../css/CitySearch.css';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
          this.setState({
            query: value,
            infoText: 'The city you are looking for can not be found. Please try another city.'
          });
          }else {
            this.setState({
              query: value,
              suggestions,
              infoText: ''
            });
          }
      };

      handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion,
          showSuggestions: false
        });
        this.props.updateEvents(suggestion);
      }

    render() {
        return (
          <div className="CitySearch">
            <InfoAlert text={this.state.infoText} />
            <h5>Choose a location:</h5>
            <input
                type="text"
                className="city"
                value={this.state.query}
                onChange={this.handleInputChanged}
                onFocus={() => { this.setState({ showSuggestions: true }) }}
                placeholder="Enter a city"
            />
            <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
              {this.state.suggestions.map((suggestion) => (
                <li style={{"display":"block"}}
                  key={suggestion}
                  onClick={() => this.handleItemClicked(suggestion)}
                >{suggestion}</li>
              ))}
              <li onClick={() => this.handleItemClicked("all")}>
                <b>See all cities</b>
              </li>
            </ul>
          </div>       
        );
      }
}

export default CitySearch;