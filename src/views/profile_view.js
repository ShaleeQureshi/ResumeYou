import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

// Importing my components
import Footer from "../components/footer";

// Importing imgs
import EDIT from "../assets/Images/profile/edit.png";
import RESUME from "../assets/Images/profile/resume.svg";
import COVER_LETTER from "../assets/Images/profile/cover_letter.svg";

// TEMP IMAGE
import ME from "../assets/Images/profile/me.jpg";

// TODO
// 1. Store user img in db then retrieve and display it
// 2. Store user resume/cv in db then retrieve and
//      figure out how to display it in a new tab
// 3. Store all data on the profile in the db under the user
// 4. Figure out how to make a custom URL for each user
//      to prevent collisions between users when they have
//      the same name
// 5. Add an EDIT button that will open up a modal and from
//      there the user can change their 200 character heading
//      msg, add/remove education or experience, change the
//      resume or cv that is displayed by uploading a new one
//      and overwriting the previously stored file
//      ----NOTE that this edit button will only show if the user
//               is on their own profile

// Component for the Education/Experience Section
const CustomSection = (props) => {
  return (
    <div className="profile_custom_section">
      <h3>{props.data.heading}</h3>
      <hr className="hr-custom" />
      <h4>{props.data.second_heading}</h4>
      <p>{props.data.other_info}</p>
    </div>
  );
};

// Sample Data for the CustomSection
const education = [
  {
    heading: "University of Waterloo",
    second_heading: "Bachelors of Computer Science",
    other_info: "Part of a double degree program",
  },
  {
    heading: "Wilfrid Laurier Univeristy",
    second_heading: "Bachelors of Business Administration",
    other_info: "Part of a double degree program",
  },
];

const experience = [
  {
    heading: "NorthHacks",
    second_heading: "Co-Founder / Full Stack Developer",
    other_info:
      "North Hacks is a non-profit Hackathon for students across Ontario. This organization allows students to develop real-world solutions for the betterment of society. I specifically worked on the development of the web application infrastructure to ensure our members had an enlightening but secure experience. More on my work here can be found on my resume.",
  },
  {
    heading: "Random company",
    second_heading: "random role",
    other_info: "i was smart here",
  },
];

const Edit_Modal_Education_Experience = (props) => {
  const [heading, setHeading] = useState(props.type.heading);
  const [second_heading, setSecond_heading] = useState(
    props.type.second_heading
  );
  const [other_info, setOther_info] = useState(props.type.other_info);

  const handleHeading = (event) => {
    setHeading(event.target.value);
  };

  const handleSecondHeading = (event) => {
    setSecond_heading(event.target.value);
  };

  const handleOtherInfo = (event) => {
    setOther_info(event.target.value);
  };

  return (
    <div>
      <Form.Control
        className="mt-3"
        type="text"
        value={heading}
        onChange={handleHeading}
      />
      <Form.Control
        className="mt-3"
        type="text"
        value={second_heading}
        onChange={handleSecondHeading}
      />
      <Form.Control
        as="textarea"
        rows={3}
        className="mt-3"
        value={other_info}
        onChange={handleOtherInfo}
      />
      <hr />
    </div>
  );
};

const EditModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  return (
    <div>
      <a onClick={handleShow}>
        <img src={EDIT} />
        <br />
        Edit
      </a>
      <Modal
        show={show}
        onHide={() => {
          handleClose(true);
        }}
        scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="text-center">
            <h5>Files must be PDF</h5>
            <Col>
              <Form.Label>Upload New Resume</Form.Label>
              <Form.Control type="file" />
            </Col>
            <Col>
              <Form.Label>Upload New Cover Letter</Form.Label>
              <Form.Control type="file" />
            </Col>
          </Row>
          <div>
            <h5 className="mt-4">Education</h5>
            <hr className="hr-custom" />
            {education.map((data) => (
              <Edit_Modal_Education_Experience type={data} key={data.heading} />
            ))}
            <h5 className="mt-4">Experience</h5>
            <hr className="hr-custom" />
            {experience.map((data) => (
              <Edit_Modal_Education_Experience type={data} key={data.heading} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const ProfileView = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        <Container className="pt-5">
          <div className="profile_heading profile_bg">
            <Row className="headline">
              <Col></Col>
              <Col className="text-center">
                <h3 className="pt-5">I am a (student or advisor) </h3>
              </Col>
              <Col id="col_3">
                <EditModal />
              </Col>
            </Row>
            <hr className="hr-custom" />
            <Row className="justify-content-around">
              <Col sm={6} className="pb-5 text-center img_col">
                <Image className="text-center" src={ME} roundedCircle />
              </Col>
              <Col sm={6} className="profile_heading_col_2">
                <h3>Shahrukh Qureshi</h3>
                <h6 className="heading_msg">
                  Hello this is my 200 character message that will go on the
                  heading section of my ResumeYou profile!!Hello this is my 200
                  character message that will go on the heading section of my
                  ResumeYou profile!!
                </h6>
              </Col>
            </Row>
            <div className="resume_cover_letter_heading text-center">
              <a>
                <img src={RESUME} /> Resume
              </a>
              <a>
                <img src={COVER_LETTER} /> Cover Letter
              </a>
            </div>
          </div>
          <div className="profile_education profile_bg">
            <h2 id="education_experience_heading" className="text-center">
              Education
            </h2>
            <hr className="hr-custom" />
            {education.map((data) => (
              <CustomSection data={data} key={data.heading} />
            ))}
          </div>
          <div className="profile_bg">
            <h2 id="education_experience_heading" className="text-center">
              Experience
            </h2>
            <hr className="hr-custom" />
            {experience.map((data) => (
              <CustomSection data={data} key={data.heading} />
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default ProfileView;
