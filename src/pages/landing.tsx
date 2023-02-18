import React, { useState } from "react";
import { Button, Row, Col, Container, Form, Card } from "react-bootstrap";
// My components
import { CustomModal, Footer } from "../components";
import { Login } from "../scripts/firebase/services";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LandingPage = () => {
  const [email, setEmail] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const callLogin = async () => {
    await Login(navigate);
  };

  const fun = () => {
    alert("clicked");
  };

  return (
    <div>
      <div className="wrapper landing-wrapper">
        <div className="landing-jumbotron">
          <Container>
            <h1>
              Welcome to <span>ResumeYou</span>
            </h1>
          </Container>
        </div>
        <Container className="landing-main-content mt-3">
          <h3>Get Professional Advice on your Resume/CVs</h3>
          <Row lg={4} className="mt-5 justify-content-between">
            <Col className="cols mt-5">
              <div className="inner-text">
                <h4>Struggling to find your first job?</h4>
                <h5>Need some help getting started?</h5>
                <p className="mt-3">
                  Well, you've come to the right place! <span>ResumeYou</span>{" "}
                  connects jobseekers who need some help getting started with
                  experts in your industry to help give you the boost you need
                  to get hired!
                </p>
                <CustomModal
                  openBtnText="How Can I Get Started?"
                  openBtnVariant="outline-dark"
                  openBtnId={undefined}
                  modalTitle="How to get started with ResumeYou"
                  modalBody={
                    <div>
                      <h1>TBD</h1>
                    </div>
                  }
                  modalButtonCloseText="Close"
                  modalButtonSaveText="Sign Up"
                  modalButtonSaveFunction={fun}
                />
              </div>
            </Col>
            <Col className="cols mt-5">
              <div className="inner-text">
                <h4 className="mb-4">Find professionals from...</h4>
                <Row className="justify-content-around mb-2">
                  <p className="bubble-p-text">Engineering</p>
                  <p className="bubble-p-text">Information Technology</p>
                  <p className="bubble-p-text">Healthcare</p>
                  <p className="bubble-p-text">Finance</p>
                  <p className="bubble-p-text">Human Resources</p>
                  <p className="bubble-p-text">Banking</p>
                  <p className="bubble-p-text">Education</p>
                  <p className="bubble-p-text">Marketing</p>
                </Row>
                <Button
                  id="lol"
                  variant="outline-dark"
                  className="text-center w-100">
                  Explore More
                </Button>
              </div>
            </Col>
            <Col className="cols mt-5">
              <div className="inner-text">
                <h4>Join the Community</h4>
                <form>
                  <TextField
                    required
                    id="outlined-controlled"
                    className="mt-3 w-100"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <FormControl
                    className="mt-3 w-100"
                    variant="outlined"
                    required>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setPassword(event.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <Button
                    variant="link"
                    className="w-100"
                    id="forgot-password-link">
                    Forgot Password?
                  </Button>
                  <Button
                    className="mt-2 w-100"
                    variant="outline-dark"
                    type="submit">
                    Sign In
                  </Button>
                  <Button className="mt-3 w-100" variant="outline-dark">
                    New to ResumeYou? Join now
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
