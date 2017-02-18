import React, {Component} from 'react';
import EditRecipe from './EditRecipe';

const titleStyle = {
	positon: 'absolute',
	top: 0,
	left: '50%',
	fontSize: '2em',	
	textAlign: 'center',

};
const nameStyle = {
	fontFamily: "'Pacifico', cursive",
};

const recipeStyle = {
		fontSize: '.5em',
		position: 'relative',
		left: '5%',
		whiteSpace: 'pre',
};



const display = {
	positon: 'absolute',
	height: '100%',
	backgroundColor:'#ebdec9',
	border: 'gray 1px solid',
	marginLeft:'10%',
	marginRight: '10%',
	marginTop: '5%',

};

class RecipeDisplay extends Component{
	constructor(props){
		super();

		this.state = {
			editClicked: false,
			
		};
	}

	handleRemove(){
		
		this.props.removeRecipe(this.props.clickedRecipe);

	}
	handleEdit(){
		
			this.setState({
				editClicked:true,
			})
	}
	reset(){
		
		this.setState({
			editClicked: false,
		})
	}

	
	
	render(props){

		const {
			clickedRecipe,
			removeRecipe,
		} = this.props;
		
		return(<div>
		{ this.state.editClicked ? <EditRecipe recipeName={clickedRecipe} newRecipe={this.props.newRecipe} recipes={this.props.recipes} 
						removeRecipe={removeRecipe} 
						clickedRecipe={clickedRecipe}handleEdit={this.handleEdit} handleReset={this.reset}/>:
		    <div>
		    <span style={nameStyle}>Recipe Box </span>
			<div style={display}>
			
			<button onClick={(event)=>this.handleRemove(event)}>Remove Recipe </button>
			<button onClick={(event)=>this.handleEdit(event)}>Edit Recipe </button>
			
			<div style={titleStyle}>{this.props.clickedRecipe}</div><hr />
			<span>Ingredients:</span><br />
			<div style={recipeStyle}>{this.props.recipes[this.props.clickedRecipe]}</div><br />
			</div>
			</div>
		}</div>
		)
		

		

	}// render function

}

export default RecipeDisplay;