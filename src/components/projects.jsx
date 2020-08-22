import React, { Component } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import five from "./five-in-a-row.png";
import academic from "./academic.png";
import habit1 from "./habit1.png";

class Project extends Component {
  render() {
    return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={five} className="projectImg" />
          <Card.Body>
            <Card.Title>Five In a Row</Card.Title>
            <Card.Text>This is an abstract strategy board game.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={academic} className="projectImg" />
          <Card.Body>
            <Card.Title>Academic Anonymous</Card.Title>
            <Card.Text>
              Academics Anonymous is a live QA session that allows students to
              continuously ask questions during in-class lectures.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={habit1} className="projectImg" />
          <Card.Body>
            <Card.Title>Habit Haven</Card.Title>
            <Card.Text>
              This app tackles the issue of self-discipline by setting
              short-term goals for the user which will lead them towards a more
              productive path.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}

export default Project;
