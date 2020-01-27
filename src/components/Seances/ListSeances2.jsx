import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

const Example = props => {
  return (
    <Col lg={3} className="mb-3">
      <Card className="jeux">
        <CardImg top width="50%" src={props.background_image} alt="" />
        <CardBody>
          <CardText>{props.id}</CardText>
          <CardTitle>{props.cout}</CardTitle>
          <CardText>{props.prix}</CardText>
          <CardSubtitle>{props.date}</CardSubtitle>
          <button className="btn btn-secondary" onClick={props.delete}>
            Delete me
          </button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example;
