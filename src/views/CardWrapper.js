import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  Button,
} from "reactstrap";
// core components

function CardWrapper({ content }) {
  return (
    <>
      <Card style={{ width: "99%" }}>
        <Image image={content.image}></Image>
        <CardBody>
          <CardTitle tag="h5" style={{fontWeight: "bold"}}>
            {content.name} / {content.title}
          </CardTitle>
          <CardSubtitle>{content.timeframe}</CardSubtitle>
          <CardText>{content.content}</CardText>
          {content.skills.map((skill, i) => (
            <Badge key={i} color="neutral">
              {skill}
            </Badge>
          ))}
          <br></br>
          <Links links={content.links}></Links>
        </CardBody>
      </Card>
    </>
  );
}

function Image(props) {
  const src = props.image
  
  if (src !== "") {
    return <CardImg alt="..." src={src} top></CardImg>
  } else {
    return <></>;
  }
}

function Links(props) {
  const links = props.links;

  if (links !== undefined) {
    return (
      <>
        {links.map((link, i) => (
          <Button key={i} className="btn-link" color="info" href={link.src} target="_blank">
            {link.name}
          </Button>
        ))}
      </>
    );
  } else {
    return <></>;
  }
}

export default CardWrapper;
