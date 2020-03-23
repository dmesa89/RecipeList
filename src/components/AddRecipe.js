import React from 'react';

class AddRecipe extends React.Component {

    state = {
        title: ''
    }

    changeValue = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type='text' name='title' placeholder='Recipe Name...' 
            value={this.state.title} onChange={this.changeValue} style={{width: '30%'}}/>
            <input type='submit' value='Add Recipe' />
        </form>
        )
    }
}


export default AddRecipe;