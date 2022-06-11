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

// Importing Landing Images
import CREATE from "../assets/Images/landing/create.png";
import FEEDBACK from "../assets/Images/landing/feedback.png";
import STEPS from "../assets/Images/landing/steps.png";
import Footer from "../components/footer";

// An Array of Objects for the cards in the learn_more section
const cards_learn_more_data = [
  {
    image: CREATE,
    header: "Create",
    title: "Create your own Resumes and Cover Letters.",
    text: "We encourage our users to develop their own Resumes and Cover Letters before seeking advice from seasoned industry workers.",
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
    text: [
      "1. Create an Account",
      <br />,
      "2. Set up Your Profile",
      <br />,
      "3. Search for Advisors",
      <br />,
      "4. Message one you like",
      <br />,
      "5. Wait for a response!",
    ],
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

// This object just contains some data for the Modal that will be
// used for the registration process and just gets rid of some
// repeated code
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
// Contains code that validates user entries for registration and
// code that communicates with the Firebase API to validate a user's
// login session and stores the data in its Realtime Database
const RegModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = (close_btn) => {
    if (close_btn) {
      setShow(false);
    } else {
      var email = document.getElementById("email").value;
      var first_name = document.getElementById("first_name").value;
      var last_name = document.getElementById("last_name").value;
      var password = document.getElementById("password").value;
      var confirm_password = document.getElementById("confirm_password").value;
      const student_btn = document.getElementById("student_btn").checked;
      const advisor_btn = document.getElementById("advisor_btn").checked;

      var invalid_form_completion = true;

      if (
        email.length > 0 &&
        first_name.length > 0 &&
        last_name.length > 0 &&
        password.length >= 8 &&
        confirm_password.length >= 8 &&
        password.length <= 24 &&
        confirm_password.length <= 24 &&
        ((student_btn === false && advisor_btn === true) ||
          (student_btn === true && advisor_btn === false))
      ) {
        var password_array = password.split("");
        var confirm_pass_array = confirm_password.split("");
        for (var i = 0; i < password_array.length; i++) {
          if (password_array[i] != confirm_pass_array[i]) {
            invalid_form_completion = true;
            break;
          }
        }
        invalid_form_completion = false;
      }

      if (invalid_form_completion) {
        alert(
          "The Registration form has not been completed properly!\nPlease double check all entries!"
        );
      } else {
        alert("You have successfully registered with ResumeYou!");
        // Add backend code here or before the alert but before setshow
        setShow(false);
      }
    }
  };
  const handleShow = () => setShow(true);
  return (
    <div className="popup_modal">
      <p className="pt-3" id="signup_link">
        {props.reg.p_text} <a onClick={handleShow}>{props.reg.a_text}</a>
      </p>
      <Modal
        show={show}
        onHide={() => {
          handleClose(true);
        }}>
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
            <Form.Label>Select one of the following:</Form.Label>
            <Form.Check
              type="checkbox"
              label="I am a Student"
              id="student_btn"
            />
            <Form.Check
              type="checkbox"
              label="I am an Advisor"
              id="advisor_btn"
            />
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              onClick={(e) => {
                e.preventDefault();
                handleClose(false);
              }}>
              {props.reg.btn_save_text}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose(true);
            }}>
            {props.reg.btn_close_modal_text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const IndexView = () => {
  return (
    <div className="bg">
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
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // Call a function here to validate login credentials and
                    //  re-route the user
                  }}>
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
      <Footer />
    </div>
  );
};

export default IndexView;
