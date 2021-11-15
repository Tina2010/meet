import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Event from './Event';

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
          <ListGroup className="EventList">{events.map(event =>
            <ListGroup.Item key={event.id}><Event event={event} /></ListGroup.Item>
            )}
          </ListGroup>
        );
      }
}

export default EventList;