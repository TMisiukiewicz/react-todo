import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
    this.state = {value: '', items: itemArray, rerender: false};

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
      <div className="ToDoForm">
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
  let listItems = itemArray.map((item) => 
  <Card key={item} className="SingleCard">
    <Checkbox className="CardCheckbox" label={item} labelPosition="left"/>
    <Importance name={item} key={item}/>
  </Card>)
  return <div className="ListItems">{listItems}</div>;
}

class Importance extends Component {
  constructor(props) {
    super(props);
    this.handleNotImportantClick = this.handleNotImportantClick.bind(this);
    this.handleImportantClick = this.handleImportantClick.bind(this);
    this.state = {isImportant: false};
  }

  handleNotImportantClick() {
    this.setState({isImportant: true});
    var name = this.props.name;
    var index = itemArray.indexOf(name);
    if(index !== -1) {
      itemArray.splice(index, 1);
      itemArray.unshift(name);
    }
    
  }
  handleImportantClick() {
    this.setState({isImportant: false});
    var name = this.props.name;
    var index = itemArray.indexOf(name);
    if(index !== -1) {
      itemArray.splice(index, 1);
      itemArray.push(name);
      
    }
  }

  render() {
    const isImportant = this.state.isImportant;
    let button = null;

    if(isImportant) {
      button = <NotImportantButton onClick={this.handleImportantClick}/>
    } else {
      button = <ImportantButton onClick={this.handleNotImportantClick}/>
    }

    return button;
  }
}

function NotImportantButton(props) {
  return <RaisedButton name={props.name} label="Not important" secondary={true} className="ImportantButton" onClick={props.onClick}/>;
}
function ImportantButton(props) {
  return <RaisedButton name={props.name} label="Important" secondary={true} className="ImportantButton" onClick={props.onClick}/>;
}

export default App;
