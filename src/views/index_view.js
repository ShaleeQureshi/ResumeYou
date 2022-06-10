import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import { Link } from "react-scroll";

// Importing my components
import PopupModal from "../components/popup_modal";

// Importing Landing Images
import CREATE from "../assets/Images/landing/create.png";
import FEEDBACK from "../assets/Images/landing/feedback.png";
import STEPS from "../assets/Images/landing/steps.png";
import Footer from "../components/footer";

// Array of steps with a break inbetween
//  This information is displayed in the learn_more section
const steps = [
  "1. Create an Account",
  <br />,
  "2. Set up Your Profile",
  <br />,
  "3. Search for Advisors",
  <br />,
  "4. Message one you like",
  <br />,
  "5. Wait for a response!",
];
// An Array of Objects for the cards in the learn_more section
const cards_learn_more_data = [
  {
    image: CREATE,
    header: "Create",
    title: "Create your own Resumes and Cover Letters.",
    text: "We encourage our users to develop their own Resumes and Cover Letters before seeking advice from seasoned industry workers",
  },
  {
    image: FEEDBACK,
    header: "Get Feedback",
    title: "Done with the creation part? Great, let's get started.",
    text: "Once you've developed your own Resumes and Cover Letters, it's time to get that industry expert's advice! And you've come to the right place!",
  },
  {
    image: STEPS,
    header: "What do I do next?",
    title: "A Step by Step Process to achieve employment",
    text: steps,
  },
];

// Card component for the learn_more section
const Card_learn_more = (props) => {
  return (
    <Card
      bg="info"
      key="dark"
      text="dark"
      style={{ width: "20rem" }}
      className="mb-2 cards_learn_more">
      <Card.Header className="text-center">{props.data.header}</Card.Header>
      <Card.Img
        variant="top"
        id="learn_more_card_img"
        className="h-50"
        src={props.data.image}
      />
      <Card.Body>
        <Card.Title className="text-center">{props.data.title}</Card.Title>
        <Card.Text>{props.data.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const registration_data = [
  {
    p_text: "Don't have an account?",
    a_text: "Let's fix that.",
    modal_heading: "ResumeYou Account Registration",
    btn_close_modal_text: "Close",
    btn_save_text: "Register",
  },
  {
    p_text: "Are you ready to",
    a_text: "get started?",
    modal_heading: "ResumeYou Account Registration",
    btn_close_modal_text: "Close",
    btn_save_text: "Register",
  },
];

// Popup Modal for registration
const RegModal = (props) => {
  const [show, setShow] = useState(false);

  // Checks to see if the user's passwords fit the given criteria
  //  1. 8-24 characters in length
  //  2. Passwords match
  const handleClose = () => {
    setShow(false);
    // fix this
  };
  const handleShow = () => setShow(true);
  return (
    <div className="popup_modal">
      <p className="pt-3" id="signup_link">
        {props.reg.p_text} <a onClick={handleShow}>{props.reg.a_text}</a>
      </p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.reg.modal_heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                required
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="Enter First Name"
                    id="first_name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Enter Last Name"
                    id="last_name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="confirm_password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              {props.reg.btn_save_text}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.reg.btn_close_modal_text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const IndexView = () => {
  return (
    <div>
      <div className="index_page">
        <section className="wrapper">
          <Container className="pt-5">
            <Row className="landing">
              <Col md={{ span: 3, offset: 2 }} className="text-center pt-5">
                <h1>ResumeYou</h1>
                <Link
                  activeClass="active"
                  to="index_learn_more"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  <Button
                    className="w-75"
                    variant="outline-dark"
                    id="index_learn_more_btn">
                    Learn More
                  </Button>
                </Link>
              </Col>
              <Col md={{ span: 3, offset: 1 }} className="pt-5">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button
                    variant="outline-success"
                    className="w-75"
                    type="submit">
                    Login
                  </Button>
                  <RegModal reg={registration_data[0]} />
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="index-learn-more" id="index_learn_more">
          <Container>
            <Card id="index_learn_more_card">
              <Card.Body>
                <Card.Title className="text-center">ResumeYou</Card.Title>
                <Card.Text className="text-center">
                  A Multi-Sided Platform designed to aid job seekers create an
                  excellent Resume and Cover Letter to achieve employment.
                </Card.Text>
                <Row className="justify-content-around">
                  {cards_learn_more_data.map((data) => (
                    <Card_learn_more data={data} key={data.title} />
                  ))}
                </Row>
              </Card.Body>
              <Card.Footer className="text-center">
                <RegModal reg={registration_data[1]} />
              </Card.Footer>
            </Card>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndexView;
