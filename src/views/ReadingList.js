import React from "react";

// reactstrap components
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Nav,
  Row,
  Col,
} from "reactstrap";

// core components
const finished = [
  { name: "The Mom Test", author: "Rob Fitzpatrick" },
  { name: "Zero to One", author: "Peter Thiel & Blake Masters" },
  { name: "Testing with Humans", author: "Giff Constable & Frank Rimalovski" },
  { name: "Talking to Humans", author: "Giff Constable & Frank Rimalovski" },
  { name: "How to Create a Mind", author: "Ray Kurzweil" },
  { name: "The Paradox of Choice", author: "Barry Schwartz" },
  { name: "Managing Oneself", author: "Peter Drucker" },
  { name: "Crossing the Chasm", author: "Geoffrey Moore" },
  { name: "Grit", author: "Angela Duckworth" },
  { name: "Homo Deus", author: "Yuval Harari" },
  {
    name: "The 21 Indispensable Qualities of a Leader",
    author: "John Maxwell",
  },
  { name: "12 Rules for Life", author: "Jordan Peterson" },
  { name: "Once a Runner", author: "John Parker Jr." },
  { name: "Outliers", author: "Malcolm Gladwell" },
  { name: "Blink", author: "Malcolm Gladwell" },
  { name: "Startup Nation", author: "Dan Senor & Saul Singer" },
];

const toBeRead = [
  { name: "Talking to Strangers", author: "Malcolm Gladwell" },
  { name: "Algorithms to Live By", author: "Brian Christian & Tom Griffiths" },
  { name: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { name: "The Innovators", author: "Walter Isaacson" },
  { name: "The Computer and the Brain", author: "John von Neumann" },
];

function ReadingList() {
  return (
    <>
      <div className="section" id="reading-list">
        <Container>
          <h2 className="title">Reading List</h2>
          <p>Some books I've read and some I hope to read soon</p>
          <div>
            <Row>
              <Col md="6">
                <Card>
                  <CardHeader>
                    <Nav
                      className="justify-content-around"
                      data-background-color="blue"
                      tabs
                    >
                      Finished
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      {finished.map((obj, i) => (
                        <li key={i}>
                          <span style={{ fontWeight: "bolder" }}>
                            {obj.name}
                          </span>{" "}
                          - {obj.author}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardHeader>
                    <Nav
                      className="justify-content-around"
                      data-background-color="blue"
                      tabs
                    >
                      To Be Read
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      {toBeRead.map((obj, i) => (
                        <li key={i}>
                          <span style={{ fontWeight: "bolder" }}>
                            {obj.name}
                          </span>{" "}
                          - {obj.author}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ReadingList;
