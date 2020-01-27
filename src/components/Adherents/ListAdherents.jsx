import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import ListAdherents2 from "../Adherents/ListAdherents2";

class ListAdherents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adherent: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/adherents").then(response => {
      const profil = response.data;
      this.setState({ adherent: profil });
    });
  }

  handledelete(index) {
    const filtered = this.state.adherent.filter((_, i) => i !== index);
    this.setState({
      adherent: filtered
    });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.adherent.map((adherent, index) => {
            return (
              <ListAdherents2
                {...adherent}
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

export default ListAdherents;
