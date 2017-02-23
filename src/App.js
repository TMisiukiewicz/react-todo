import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './App.css';


var itemArray = [];


class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <Form/>
      </MuiThemeProvider>
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
    itemArray.push(this.state.value);
    event.preventDefault();
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
      <form className="Form" onSubmit={this.handleSubmit}>
        <TextInput value={this.state.value} handler={this.handleChange}/>
        <SubmitButton name="Add to list"/>
      </form>
      <ItemsList/>
      </div>
    );
  }
}

function TextInput(props) {
  return <TextField
  floatingLabelFocusStyle={{color: '#80CBC4'}}
  underlineFocusStyle={{borderColor: '#80CBC4'}}
  fullWidth={true}
  floatingLabelText={'What you have to do today?'}
  rows={2}
  style={{fontSize: 26}}
  value={props.value}
  onChange={props.handler}/>
}

function SubmitButton(props) {
  return <FlatButton type="submit" backgroundColor={'#80CBC4'} hoverColor={'#26A69A'}>{props.name}</FlatButton>
}

function ItemsList() {
  let listItems = itemArray.map((item) => <li key={item}>{item}</li>)
  return <ul>{listItems}</ul>
}

export default App;
