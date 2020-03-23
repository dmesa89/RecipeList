import React from 'react';
import RecipeInstruction from './RecipeInstruction';
import PropTypes from 'prop-types';

class Recipe extends React.Component {
render(){
  return this.props.instructions.map((instruction)=> (
    <RecipeInstruction key={instruction.id} instruction={instruction} 
    deleteInstruction={this.props.deleteInstruction}/>
  ));
  }
}

Recipe.propTypes = {
  instructions: PropTypes.array.isRequired
}

export default Recipe;