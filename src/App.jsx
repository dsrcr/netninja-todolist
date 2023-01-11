import React, { Component } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";

export default class App extends Component {
    state = {
        todos: [
            { id: 1, content: "Go shopping" },
            { id: 2, content: "Code some React" },
            { id: 3, content: "Eat" },
        ],
    };

    deleteTodo = (id) => {
        console.log(`Todo with id = ${id} will be deleted from the list`);
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({ todos });
    };

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos,
        });
    };

    render() {
        return (
            <div className="app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
                <AddForm addTodo={this.addTodo} />
            </div>
        );
    }
}
