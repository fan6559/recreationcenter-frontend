import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import ListActivites2 from "../Activites/ListActivites2";

class ListSeances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activite: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/activites").then(response => {
      const loisir = response.data;
      this.setState({ activite: loisir });
    });
  }

  handledelete(index) {
    const filtered = this.state.activite.filter((_, i) => i !== index);
    this.setState({
      activite: filtered
    });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.activite.map((activite, index) => {
            return (
              <ListActivites2
                {...activite}
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
