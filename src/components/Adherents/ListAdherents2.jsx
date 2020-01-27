import React from "react";
import { Card, CardBody, CardText, CardImg, button, Col } from "reactstrap";

import "./ListAdherents2.css";

const ListAdherents2 = props => {
  console.log(props);
  return (
    <Col lg={3} className="mb-3">
      <Card className="jeux">
        <CardImg className="local" src={props.Avatar} alt="" />
        <CardBody>
          <CardText>{props.id}</CardText>
          <CardText>{props.nom}</CardText>
          <CardText>{props.prenom}</CardText>
          <CardText>{props.dateNaissance}</CardText>
          <CardText>{props.rue}</CardText>
          <CardText>{props.codePostal}</CardText>
          <CardText>{props.ville}</CardText>
          <button className="btn btn-secondary" onClick={props.delete}>
            Delete me
          </button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListAdherents2;
