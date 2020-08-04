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
            <Card.Text>
              This is a Chinese game and also my high school final project
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={academic} className="projectImg" />
          <Card.Body>
            <Card.Title>Academic Anonymous</Card.Title>
            <Card.Text>Building this during Hack the Valley!</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={habit1} className="projectImg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
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
