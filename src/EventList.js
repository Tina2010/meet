import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';

import Event from './Event';

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
        <Row>
            <Col>       
              <ListGroup xs={1} sm={2} md={2} lg={1} className="EventList">{events.map(event =>
                <ListGroup.Item  key={event.id}><Event event={event} /></ListGroup.Item>
                )}
              </ListGroup>          
            </Col>
        </Row>
        );
      }
}

export default EventList;