import React, { useContext } from "react";
import { Button, Row, Card } from "react-bootstrap";

// For text
import { AppTextContext } from "../scripts/context/text";
// My components
import { Footer } from "../components";
import { Login } from "../scripts/firebase/services";

const LandingPage = () => {
  const text = useContext(AppTextContext);
  return (
    <div>
      <div className="wrapper">
        <Card
          bg="primary"
          key="primary"
          text="light"
          style={{ width: "18rem" }}
          className="mb-2">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <section className="center">
          <hr id="aqua-underline" />
          <h1>{text.AppText.HomePage.title}</h1>
          <Button
            className="landing-btn text-center w-50"
            variant="outline-dark"
            onClick={Login}>
            {text.AppText.HomePage.button}
          </Button>
          <hr id="dark-blue-underline" className="w-50" />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
