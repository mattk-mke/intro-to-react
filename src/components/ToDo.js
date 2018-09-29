import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
                <span>  {this.props.description}  </span>
                <button style={{marginLeft: 15}} onClick={this.props.deleteTodo}>✗</button>
            </li>
        );
    }
}

export default ToDo;