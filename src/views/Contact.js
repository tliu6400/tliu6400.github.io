import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
} from "reactstrap";

// core components
import Notifications from "./Notifications.js";

function Contact(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);

  const [submitted, setSubmitted] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSent(true);
    setSubmitted(true);
    console.log(submitted);
    console.log(sent);
    axios({
      method: "POST",
      url: "https://cryptic-waters-08431.herokuapp.com/",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    })
      .then((response) => {
        if (response.data.status === "success") {
          setSent(true);
          setSubmitted(true);
          resetForm();
        } else if (response.data.status === "fail") {
          setSent(false);
          setSubmitted(true);
        }
      })
      .catch((error) => {
        setSent(false);
        setSubmitted(true);
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  function MessageSubmitted({ submitted, sent }) {
    if (submitted) {
      return (
        <>
          <Row className="justify-content-around">
            <Col md="8">
              <Notifications sent={sent}></Notifications>
            </Col>
          </Row>
          ;
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="section" id="contact">
        <Container>
          <Row className="justify-content-around">
            <h2 className="title">Contact</h2>
          </Row>
          <div>
            <Form onSubmit={(event) => handleSubmit(event)} method="POST">
              <Row className="justify-content-around">
                <Col md="8">
                  <Row>
                    <Col md="6">
                      <InputGroup
                        className={leftFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user-circle"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          value={name}
                          onFocus={() => setLeftFocus(true)}
                          onBlur={() => setLeftFocus(false)}
                          onChange={(event) => setName(event.target.value)}
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <InputGroup
                        className={rightFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-inbox"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="text"
                          value={email}
                          onFocus={() => setRightFocus(true)}
                          onBlur={() => setRightFocus(false)}
                          onChange={(event) => setEmail(event.target.value)}
                        ></Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          placeholder="Subject"
                          type="text"
                          value={subject}
                          onChange={(event) => setSubject(event.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input
                          placeholder="Message"
                          rows="10"
                          type="textarea"
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-around">
                    <Button color="default" type="submit">
                      Send
                    </Button>
                  </Row>
                </Col>
              </Row>
              <MessageSubmitted
                submitted={(submitted, sent)}
              ></MessageSubmitted>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
