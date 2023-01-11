import React, { Component } from "react";

export default class AddForm extends Component {
    state = {
        content: "",
    };

    handleChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("The form have been submited");
        this.props.addTodo(this.state);
        this.setState({
            content: "",
        });
    };
    render() {
        return (
            <div className="center">
                <label htmlFor="form">Add new todo: </label>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type in new todo"
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        );
    }
}
