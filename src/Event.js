import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import './Event.css';

class Event extends Component {
  state = {
    detailsShown: false
  }

  showDetails = () => {
    this.setState(state => ({
      detailsShown : !state.detailsShown
    }));
  }

  render() {
      const { event } = this.props;

      return (
        <Card className="Event">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text className="summary">{event.summary}</Card.Text>
          <Card.Text className="location">{event.location}</Card.Text>
          <Card.Text className="startDatetime">{event.start.datetime}</Card.Text>
          <Button variant="success" className="detailsButton" onClick={this.showDetails}>{(this.state.detailsShown ? "Hide Details" : "See Details")}
          </Button>
          <div className={"eventDetails" + (this.state.detailsShown ? " active" : " inactive")}>
            <Card.Text className="startTimezone">{event.start.timezone}</Card.Text>
            <Card.Text className="description">{event.description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      );
    }
}

export default Event;