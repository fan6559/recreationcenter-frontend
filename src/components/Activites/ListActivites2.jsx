import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  button,
  Col
} from "reactstrap";

import "./ListActivites2.css";

const ListActivites2 = props => {
  console.log(props);
  return (
    <Col lg={3} className="mb-3">
      <Card className="jeux">
        <CardImg className="adventure" src={props.Image} alt="" />
        <CardBody>
          <CardText>{props.id}</CardText>
          <CardTitle>{props.Label}</CardTitle>
          <button className="btn btn-secondary" onClick={props.delete}>
            Delete me
          </button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListActivites2;
