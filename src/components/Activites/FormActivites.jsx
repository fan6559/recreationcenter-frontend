import React from "react";
import axios from "axios";
import "./FormActivites.css";

class FormActivite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Label: "",
      Image: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8000/activites",
      data: this.state
    })
      .then(response => {
        alert("Demande ajoutée.");
        this.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }

  resetForm() {
    this.setState({
      Label: ``,
      Image: ``
    });
  }

  render() {
    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="Label">Label</label>
            <input
              placeholder="Ex:escalade"
              type="text"
              className="form-label"
              id="Label"
              value={this.state.Label}
              onChange={this.onLabelChange.bind(this)}
            />
            <div className="form-group">
              <label htmlFor="Image">Image</label>
              <input
                type="text"
                className="form-label"
                id="Label"
                value={this.state.Image}
                onChange={this.onImageChange.bind(this)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            envoyée
          </button>
        </form>
      </div>
    );
  }

  onLabelChange(event) {
    this.setState({ Label: event.target.value });
  }
  onImageChange(event) {
    this.setState({ Image: event.target.value });
  }
}

export default FormActivite;
