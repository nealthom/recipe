import React, {Component} from 'react';

const titleStyle = {
	positon: 'absolute',
	top: 0,
	left: 0,
	fontSize: '2em',	
	

};
const nameStyle = {
	fontFamily: "'Pacifico', cursive",
};

const ingredientStyle = {
	position: 'relative',
	
	top: '50%',
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

const textAreaStyle = {
	border: '2px dashed black',
};

class NewRecipe extends Component{

	constructor(props){
		super(props);

	this.state = {
		recipeName : '',
		ingredients : ''
	}


	}

	handleChangeName(event){
		this.setState({
			recipeName: event.target.value,
		});
	}
	handleChangeIngredients(event){
		this.setState({
			ingredients: event.target.value,
		});
	}
	handleSubmit(event){
		event.preventDefault();
		this.props.newRecipe(this.state.recipeName,this.state.ingredients);
		
	}

	render(props){
	
		return(
			<div>

				<span style={nameStyle}>Recipe Box </span>
				<div style={display}>
				<button onClick={(event)=>this.handleSubmit(event)}> Submit </button>
				
				<div style={titleStyle}>
					<input type="text" placeholder="Recipe" style={textAreaStyle} onChange={(event)=>this.handleChangeName(event)}/>
				</div>
				<div style={ingredientStyle}>
					<textarea rows="4" cols="50" style={textAreaStyle} placeholder="Ingredients" onChange={(event)=>this.handleChangeIngredients(event)}>
					</textarea>
				</div><br />
			</div></div>
		)

	}

}


export default NewRecipe;