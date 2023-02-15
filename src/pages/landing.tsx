import React, { useContext } from "react";
import { Button } from "react-bootstrap";
// My components
import { Footer } from "../components";
import { Login } from "../scripts/firebase/services";
import { useNavigate } from "react-router-dom";

interface LandingPageInterface {
  title: string;
  signOnButtonText: string;
}

const LandingPageText: LandingPageInterface = {
  title: "Welcome to ResumeYou",
  signOnButtonText: "Sign On With Google",
};

const LandingPage = () => {
  const navigate = useNavigate();
  const callLogin = async () => {
    await Login(navigate);
  };

  return (
    <div>
      <div className="wrapper">
        <section className="center">
          <hr id="aqua-underline" />
          <h1>{LandingPageText.title}</h1>
          <Button
            className="landing-btn text-center w-50"
            variant="outline-dark"
            onClick={callLogin}>
            {LandingPageText.signOnButtonText}
          </Button>
          <hr id="dark-blue-underline" className="w-50" />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
