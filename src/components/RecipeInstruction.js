import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class RecipeInstruction extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '2px 5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.instruction.completed ? 
            'line-through' : 'none'
        }
    }

    render() {

        //can destructure (but won't for better comprehension)
        //const {id, title} = this.props.instruction

        return (
            <div style={this.getStyle()}>
                <p>
                    {'  '}
                    {this.props.instruction.title}
                    <button onClick={this.props.deleteInstruction.bind(this, this.props.instruction.id)} style={buttonStyle}>delete</button>
                </p>
            </div>
        )
    }
}

RecipeInstruction.propTypes = {
    instruction: PropTypes.object.isRequired
  }


const buttonStyle = {
    float: 'right'
}

export default RecipeInstruction

