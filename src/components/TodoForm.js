import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        };
    }
    handleChanges = event => {
        this.setState({
            taskName: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        if(this.state.taskName !== '') {
            this.props.addItemToList(this.state.taskName);
            this.setState({
                taskName: ''
            });
        }
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit} >
                <input onChange={this.handleChanges} type='text' value={this.state.taskName} />
                <button> Add </button>
            </form>
        )
    }
}