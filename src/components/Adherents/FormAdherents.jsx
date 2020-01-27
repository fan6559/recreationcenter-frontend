import React from "react";
import axios from "axios";
import "./FormAdherents.css";

class FormAdherents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      dateNaissance: "",
      Rue: "",
      codePostal: "",
      ville: "",
      Avatar: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8000/adherents",
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
      nom: ``,
      prenom: ``,
      dateNaissance: ``,
      rue: ``,
      codePostal: ``,
      ville: ``,
      Avatar: ``
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
            <label htmlFor="Nom">Nom</label>
            <input
              type="text"
              className="form-Nom"
              id="nom"
              value={this.state.nom}
              onChange={this.onnomChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="prenom"
              className="form-prenom"
              id="prenom"
              aria-describedby="Prenom"
              value={this.state.prenom}
              onChange={this.onprenomChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="DateNaissance">Date de naissance</label>
            <textarea
              placeholder="Ex:1998.01.01"
              className="form-date"
              rows="5"
              id="DateNaissance"
              value={this.state.dateNaissance}
              onChange={this.ondateNaissanceChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rue">Rue</label>
            <textarea
              className="form-rue"
              rows="5"
              id="rue"
              value={this.state.rue}
              onChange={this.onrueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="codePostal">Code Postal</label>
            <textarea
              className="form-postal"
              rows="5"
              id="codePostal"
              value={this.state.codePostal}
              onChange={this.oncodePostalChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ville">Ville</label>
            <textarea
              className="form-ville"
              rows="5"
              id="ville"
              value={this.state.ville}
              onChange={this.onvilleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Avatar</label>
            <textarea
              className="form-avatar"
              rows="5"
              id="image"
              value={this.state.Avatar}
              onChange={this.onAvatarChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyée
          </button>
        </form>
      </div>
    );
  }

  onnomChange(event) {
    this.setState({ nom: event.target.value });
  }

  onprenomChange(event) {
    this.setState({ prenom: event.target.value });
  }

  ondateNaissanceChange(event) {
    this.setState({ dateNaissance: event.target.value });
  }

  onrueChange(event) {
    this.setState({ rue: event.target.value });
  }

  oncodePostalChange(event) {
    this.setState({ codePostal: event.target.value });
  }

  onvilleChange(event) {
    this.setState({ ville: event.target.value });
  }
  onAvatarChange(event) {
    this.setState({ Avatar: event.target.value });
  }
}

export default FormAdherents;
