import React, { Component } from 'react'
import PropTypes from 'prop-types';


class RecipeItem extends Component {

    getItemStyle = (completed) => {
        return {
            background: '#f4f4f4',
            padding: '2px 5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed ? 
            'line-through' : 'none',
        }
    }

    getRecipeStyle = () => {
        return {
            border: '2px solid',
            width: '25%',
            float: 'left',
            margin: '5% 2%'

        }
    }
      



    render() {


        console.log(this.props.recipe)

        return (
        <div style={this.getRecipeStyle()}>
            <h4>{this.props.recipe.title}</h4>
            {this.props.recipe.list.map((item)=>(
                <div key={item.id} style={this.getItemStyle(item.completed)}>
                <p>
                <input type='checkbox' onChange={this.props.changeCompleted.bind(this, this.props.recipe.id, item.id)} />
                {'  '}
                {item.title}
                </p>
                </div>
            ))}
            <button onClick={this.props.deleteRecipe.bind(this, this.props.recipe.id)}>delete</button>
        </div>

            )
    }
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired
  }

export default RecipeItem;


/*this.props.recipes.map((recipe)=> (
    <RecipeList key={recipes.id}  onDelete={this.props.onDelete}/>
    (
            <div>
                console.log({this.props.recipe})
                {this.props.recipe.list.foreach((anItem)=>(
                    <div style={this.getStyle()}>
                    <p>
                    <input type='checkbox' onChange={this.props.changeCompleted.bind(this, this.props.recipe.anItem)} />
                    {'  '}
                    {this.props.recipe.title}
                    <button onClick={this.props.deleterecipe.bind(this, this.props.recipe.id)} >delete</button>
                    </p>
                    </div>

                ))}
            </div>

            
        )
  ));
  */