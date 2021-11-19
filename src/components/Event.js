import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';

import '../css/Event.css';
import Moment from "react-moment";

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
        <Card className="eventCard" style={{margin: '5px'}}>
        <Card.Body>
          <Card.Title className="summary">{event.summary}</Card.Title>
          <Card.Text className="location"><MdOutlinePlace /> {event.location}</Card.Text>
          <Card.Text className="startDatetime"><FaRegCalendarAlt />
          <Moment format=" DD.MM.YYYY HH:MM ">{event.start.dateTime}</Moment>o'Clock 
          </Card.Text>
          <Card.Text className="mb-4 text-muted">TZ: {event.start.timeZone}</Card.Text>
          <Button variant="success" className="detailsButton" onClick={this.showDetails}>{(this.state.detailsShown ? "Hide Details" : "See Details")}
          </Button>
          <div className={"eventDetails" + (this.state.detailsShown ? " active" : " inactive")}>
            <Card.Subtitle className="mt-3 mb-2 text-muted">Description</Card.Subtitle>
            <Card.Text className="description">{event.description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      );
    }
}

export default Event;