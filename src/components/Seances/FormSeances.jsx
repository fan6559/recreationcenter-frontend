import React from "react";
import axios from "axios";
import "./FormSeances.css";

class FormSeances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cout: "",
      prix: "",
      date: "",
      activites: [],
      activiteUuid: ""
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/activites").then(response => {
      const activites = response.data;
      this.setState({ activites: activites });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8000/seances",
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
      cout: "",
      prix: "",
      date: ""
    });
  }
  activiteChange(e) {
    console.log(e.target.value);

    this.setState({ activiteUuid: e.target.value });
  }

  render() {
    console.log(this.state.activites);

    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <select
            className="bruh"
            value={this.state.activiteUuid}
            onChange={this.activiteChange.bind(this)}
          >
            <option value="">Select something</option>
            {this.state.activites.map((activite, index) => {
              return (
                <option key={index} value={activite.uuid}>
                  {activite.Label}
                </option>
              );
            })}
          </select>

          <div className="form-group">
            <label htmlFor="Nom">Cout</label>
            <input
              type="text"
              className="form-cout"
              id="cout"
              value={this.state.cout}
              onChange={this.oncoutChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prix</label>
            <input
              type="prenom"
              className="form-prix"
              id="prix"
              aria-describedby="prix"
              value={this.state.prix}
              onChange={this.onprixChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <textarea
              placeholder="Ex:2020.01.20"
              className="form-date"
              rows="5"
              id="date"
              value={this.state.date}
              onChange={this.ondateChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            envoyée
          </button>
        </form>
      </div>
    );
  }

  oncoutChange(event) {
    this.setState({ cout: event.target.value });
  }

  onprixChange(event) {
    this.setState({ prix: event.target.value });
  }

  ondateChange(event) {
    this.setState({ date: event.target.value });
  }
}

export default FormSeances;
