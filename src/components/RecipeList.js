import React, { Component } from 'react'
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';

class RecipeList extends Component {

render(){

  return this.props.recipes.map((recipe)=> (
    <RecipeItem key={recipe.id} recipe={recipe} title={recipe.title} changeCompleted={this.props.changeCompleted} 
    deleteRecipe={this.props.deleteRecipe} />
    
  ));
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeList;

