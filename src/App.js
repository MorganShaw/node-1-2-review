import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component() {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      name: "",
      type: "",
      inputField: ""
    }
  }

  componentDidMount() {
    axios
    .get('/api/pokemon')
    .then((res) => {
      //res.data will be the data send from teh controller function inside send()
      this.setState({ pokemon: res.data});
    }).catch((err)) => {
      console.log(err, "get request failed");
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  addPokemon = () => {
    const {name, type, nickname} = this.state;
    axios.post("/api/pokemon", )
  }
  render (){
    return (
    <div className="App">
      <div>
        <input name="name" placeholder="name" onChange={this.handleChange}/>
        <input name="type" placeholder="type" onChange={this.handleChange}/>
        <input name="nickname" placeholder="nickname" onChange={this.handleChange}/>
      </div>
    </div>
    );
  }
  
}

export default App;
