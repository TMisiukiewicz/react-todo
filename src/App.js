import React, { Component } from 'react';
import './App.css';


var itemArray = [];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
      </div>
    );
  }
}

class Form extends Component {

  constructor(props) {

    super(props);
    this.state = {value: '', items: itemArray};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    itemArray.push(this.state.value);
    event.preventDefault();
    console.log(itemArray);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <TextInput value={this.state.value} handler={this.handleChange}/>
        <SubmitButton name="Add to list"/>
      </form>
      <ItemsList/>
      </div>
    );
  }
}

function TextInput(props) {
  return <input type="text" value={props.value} onChange={props.handler}/>
}

function SubmitButton(props) {
  return <input type="submit" value={props.name}/>;
}

function ItemsList() {
  let listItems = itemArray.map((item) => <li key={item}>{item}</li>)
  return <ul>{listItems}</ul>
}

export default App;
