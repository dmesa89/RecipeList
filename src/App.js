import React from 'react';
import Header from './components/layout/Header';
import AddInstruction from './components/AddInstruction';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import './App.css';
import uuid from "uuid/v4";

class App extends React.Component {
  state = {
    instructions: [
      {
        id: uuid(),
        title: 'boil water',
        completed: false
      },
      {
        id: uuid(),
        title: 'mix ingredients',
        completed: false
      },
      {
        id: uuid(),
        title: 'bake for 30 minutes',
        completed: false
      }
    ],

    recipes:[

    ]
  }




  changeCompleted = (recipeID, instructionID) => {
    console.log(recipeID);
    console.log(instructionID);
    this.setState({recipes: this.state.recipes.map( recipe => { 
      if(recipe.id === recipeID) {
        this.changeItemCompleted(recipe, instructionID);
      }
      return recipe;
    } ) });

  }

  changeItemCompleted = (recipe, instructionID) => {
    console.log(recipe.id);
    console.log(instructionID);
    recipe.list.map( item => {
      if(item.id === instructionID) {
        
        item.completed = !item.completed;
      }
      return item;
    }
     )
  }

  


  deleteInstruction = (id) => {
    //want to change the state of instructions array to contain all but the matching instruction id
    this.setState({instructions: [...this.state.instructions.filter(instruction => 
      instruction.id !== id
    )] });
  }

  //add the instruction to recipe
  addInstruction = (title) => {
    const newInstruction = {
      id: uuid(),
      title : title,
      completed: false
    }
    this.setState({instructions: [...this.state.instructions, newInstruction]});
  }

    //add the recipe to list
    addRecipe = (title) => {

      const newRecipe = {
        id: uuid(),
        title: title,
        list: [...this.state.instructions],
        deleted: false,
        completed: false
      }
      this.setState({instructions: []});
      this.setState({recipes: [...this.state.recipes, newRecipe]});
      
    }

    deleteRecipe= (id) => {
      this.setState({recipes: [...this.state.recipes.filter(recipe => 
        recipe.id !== id
      )] });
    }



  render() {
    
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddInstruction addInstruction={this.addInstruction}/>
        <Recipe instructions={this.state.instructions} deleteInstruction={this.deleteInstruction}/>
        <AddRecipe  addRecipe={this.addRecipe}/>
        <RecipeList recipes={this.state.recipes} changeCompleted={this.changeCompleted} deleteRecipe={this.deleteRecipe}/>
        </div>
      </div>
    );
  }
}

export default App;
