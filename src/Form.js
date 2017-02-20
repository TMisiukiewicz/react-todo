import React, { Component } from 'react';

function TextInput(props) {
    return <input type="text" value={props.value} onChange={props.handler}/>;
}

function Submit(props) {
    return <input type="submit" value={props.value}/>
}
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        elements.push(this.state.value);
        this.setState({value: ''});
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Task:
                    <TextInput value={this.state.value} handler={this.handleChange}/>
                    <Submit value={'Zapisz'}/>
                </label>
            </form>
        );
    }
}

export default Form;