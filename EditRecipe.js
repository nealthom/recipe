import React, {Component} from 'react';
import RecipeDisplay from './RecipeDisplay';


const ingredientStyle = {
	position: 'relative',
	
	top: '50%',
	whiteSpace: 'pre'
};
const textAreaStyle = {
	border: '2px dashed black',
};

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


class EditRecipe extends Component{

	constructor(props){
		super();

		this.state = {
			ingredients: '',
			submitted: false,
		};
	}

	handleSubmit(){
		    console.log(" checking shit out " + this.props.recipeName + this.props.recipes[this.props.recipeName]);
		    if( this.state.ingredients !== '')
				this.props.newRecipe(this.props.recipeName, this.state.ingredients);
			this.setState({submitted:true});
			this.props.handleReset();
			


	}
	handleCancel(){
		this.setState({submitted:true});
		this.props.handleReset();
	}
	reset(){
		
		this.setState({
			submitted: false,
		})
	}
	edit(event){
		this.reset();
		this.props.handleEdit(event);
		
	}

	handleChangeIngredients(event){
		event.preventDefault();
		this.setState({
			ingredients: event.target.value,
		})
	}
	handleRemove(event){
		event.preventDefault();
		this.props.removeRecipe(this.props.clickedRecipe);

	}
	render(){

			const name = this.props.recipeName;
			return(
			
			<div >{
				this.state.submitted ?  

				<RecipeDisplay 
               newRecipe={this.props.newRecipe}  
               removeRecipe={this.props.removeRecipe} 
               recipes={this.props.recipes} 
               clickedRecipe={this.props.clickedRecipe} 
               display={this.handleNewRecipe}/>
				:
				<div>
				<span style={nameStyle}>Recipe Box </span>
				<div style={display}>
				<button onClick={(event)=>this.handleSubmit(event)}> Submit </button>
				<button onClick={(event)=>this.handleCancel(event)}>Cancel </button>				
				<div style={titleStyle}>{name}</div><hr />
				<span>Ingredients:</span><br />
				<div style={ingredientStyle}>
					<br />
					<textarea 
					style={textAreaStyle}
					rows="4" 
					cols="50" 
					placeholder={this.props.recipes[this.props.recipeName]}
					onChange={(event)=>this.handleChangeIngredients(event)}>
					{this.props.recipes[this.props.recipeName]}
					</textarea>
				</div><br /></div></div>}
			</div>
		
			)

	}

}

export default EditRecipe;