import React from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seances: [],
      adherents: [],
      activites: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get("http://localhost:8000/seances")
      .then(response => {
        this.setState({
          seances: response.data
        });
        return axios.get("http://localhost:8000/adherents");
      })
      .then(response => {
        this.setState({
          adherents: response.data
        });
        return axios.get("http://localhost:8000/activites");
      })
      .then(response => {
        this.setState({
          activites: response.data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.seances.map(seance => {
            return (
              <Col>
                <div>uuid: {seance.uuid}</div>
                <div>cout: {seance.cout}</div>
                <div>prix: {seance.prix}</div>
                <div>date: {seance.date}</div>
              </Col>
            );
          })}
        </Row>
        <Row>
          {this.state.adherents.map(adherent => {
            return (
              <Col>
                <div>uuid: {adherent.uuid}</div>
                <div> nom: {adherent.nom}</div>
                <div>prenom: {adherent.prenom}</div>
                <div>dateNaissance: {adherent.dateNaissance}</div>
                <div>rue: {adherent.rue}</div>
                <div>codePostal: {adherent.codePostal}</div>
                <div>ville: {adherent.ville}</div>
                <div>Avatar: {adherent.Avatar}</div>
              </Col>
            );
          })}
        </Row>
        <Row>
          {this.state.activites.map(activite => {
            return (
              <Col>
                <div>Label: {activite.Label}</div>
                <div> Image: {activite.Image}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Home;
