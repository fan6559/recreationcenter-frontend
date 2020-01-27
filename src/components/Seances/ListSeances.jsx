import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import ListSeances2 from "../Seances/ListSeances2";

class ListSeances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seance: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/seances").then(response => {
      const sortie = response.data;
      this.setState({ seance: sortie });
    });
  }

  handledelete(index) {
    const filtered = this.state.seance.filter((_, i) => i !== index);
    this.setState({
      seance: filtered
    });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.seance.map((seance, index) => {
            return (
              <ListSeances2
                {...seance}
                key={index}
                delete={this.handledelete.bind(this, index)}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default ListSeances;
