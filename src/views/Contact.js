import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Form,
  Alert,
} from "reactstrap";

// core components

function Contact(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [submitted, setSubmitted] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://cryptic-waters-08431.herokuapp.com/send",
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
          <div className="section section-notifications">
            <Alert color="success" isOpen={sent}>
              <Container>
                <strong>Success</strong> Your message sent successfully!
                <button
                  type="button"
                  className="close"
                  onClick={() => setSubmitted(false)}
                >
                  <span aria-hidden="true">
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </span>
                </button>
              </Container>
            </Alert>
            <Alert color="danger" isOpen={!sent}>
              <Container>
                <strong>Error</strong> Your message failed to send!
                <button
                  type="button"
                  className="close"
                  onClick={() => setSubmitted(false)}
                >
                  <span aria-hidden="true">
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </span>
                </button>
              </Container>
            </Alert>
          </div>
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
            <MessageSubmitted
              submitted={submitted}
              sent={sent}
            ></MessageSubmitted>
            <Form onSubmit={(event) => handleSubmit(event)} method="POST">
              <Row className="justify-content-around">
                <Col md="8">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          placeholder="Name"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          placeholder="Email"
                          type="text"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        ></Input>
                      </FormGroup>
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
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
