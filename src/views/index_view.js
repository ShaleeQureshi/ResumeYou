import React from "react";
import { Button, Card, Row, Col, Container, Form } from "react-bootstrap";
import Feedback from "react-bootstrap/esm/Feedback";

// Importing Landing Images
import CREATE from "../assets/Images/landing/create.png";
import FEEDBACK from "../assets/Images/landing/feedback.png";
import RESUMEYOU_LOGO from "../assets/Images/landing/resumeyou_logo.png";

const cards = [
  {
    image: CREATE,
    title: "Create",
    text: "Create Resumes and Cover Letters",
  },
];

const IndexView = () => {
  return (
    <div className="index_page">
      <div className="wrapper">
        <Container className="pt-5">
          <Row className="justify-content-around pt-5">
            <Card style={{ width: "18rem" }} bg="dark">
              <Card.Img variant="top" src={CREATE} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={RESUMEYOU_LOGO} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={FEEDBACK} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndexView;
