import React, { Component } from 'react'

export class AddInstruction extends Component {
    state = {
        title: ''
    }

    changeValue = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addInstruction(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text' name='title' placeholder='Add Instruction...' 
                value={this.state.title} onChange={this.changeValue} style={{width: '50%'}}/>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default AddInstruction
