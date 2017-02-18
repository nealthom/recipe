import React, {Component} from 'react';
import NewRecipe from './NewRecipe';
import RecipeDisplay from './RecipeDisplay';

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;


const containerStyle ={
  position : 'relative',
  border: 'black 1px solid',
  backgroundColor: '#f4214a',
  height: y,
  width: x,
  color: 'black',
  fontFamily: "'Raleway', sans-serif",
  
};
const ingredientDisplayStyle={
  position: 'absolute',
  top:0,
  left: '20%',
  borderLeft: 'black 1px solid',
  backgroundColor: '#993044',
  height: '100%',
  width: '80%',

};

const recipeDisplayStyle={
  position: 'absolute',
  top: 0,
  left: 0, 

};
const newRecipeButtonDisplay={
  position: 'absolute',
  top: 300,
  width: 300,
  textAlign: 'center',
};
const recipeListDisplay={
  position: 'absolute',
  top: 320,
};
const imgStyle = {
  zIndex: 9999,
  width:300, 
  height:300,
  backgroundColor: 'black',
}

const nameStyle = {
  fontFamily: "'Pacifico', cursive",
  fontSize: '2em',
};

const recipeStyle = {
    fontSize: '2em',
    position: 'relative',
    left: '5%',
    whiteSpace: 'pre',
};

const storyStyle = {
  padding: '1em',
  width: '80%',
  whiteSpace: 'normal',
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

if(Object.keys(localStorage).length === 0){

localStorage.setItem('chickensSaghettiTeddy', 'noodles, sauce, chicken');
localStorage.setItem('spaghettiBalls', 'noodles, sauce, meatballs');
localStorage.setItem('cereal', 'count chocula, milk');

}
const local = localStorage;

class Recipes extends Component{

  constructor(props){
    super();

    this.state = {
      recipes: local,
      actions:{
        clicked: '',
        display: false,}// actions object
       
      }// state
  }// constructor

  addRecipe = ( rec,ing) =>{
    
    let obj = this.state.recipes;
    obj[rec] = ing;
    this.setState({
        recipes: obj,
        actions:{clicked:rec}
    })
    
  }

  deleteRecipe = (val) =>{
    
    let obj = this.state.recipes;
    delete obj[val];
    this.setState({
      recipes: obj
    });
    localStorage.removeItem(val);
  }

  handleRecipeClick(val){

    this.setState({
        actions: {clicked : val}
    });
   
  }
  handleNewRecipe(event){
     
     this.setState({
      actions : { display:true}
     })
  }

  render(){
    console.log(Object.keys(local));
    const myKeys = [];
    for( var key in this.state.recipes){
        if( this.state.recipes.hasOwnProperty(key))
            myKeys.push(key);
          }


    return(
      
      
      <div style={containerStyle}>
      <img src='https://lh3.googleusercontent.com/_cCtTxrzcXeKRhBS8i7yaoD1Ink6UIVlTTSz4huGXMKzla6TuEl4mHtB7apmL51QlU7U=w300' 
        alt="Recipe box" 
        style={imgStyle}/>
      <div style={recipeDisplayStyle}>
      <button style={newRecipeButtonDisplay}
              onClick = {(event) => this.handleNewRecipe(event)}>
        Add a new Recipe
      </button>
      
      <ul style={recipeListDisplay}>
        {myKeys.map(function(val, i){ 
          if( val !== 'clicked' || val !== 'display')
          return <li onClick={(event) => this.handleRecipeClick(val)}>{val}</li>
        },this)  
        }
       </ul>
       
       </div>
       <div style={ingredientDisplayStyle}>


            { this.state.actions.clicked === '' ? 
            <div>
            <span style={nameStyle}>Recipe Box </span>
            <div style={display}>

            <div style={recipeStyle}>Welcome to the RecipeBox
            <div style= {storyStyle}>
            <p>All your recipes are stored in your browser's local storage any changes you make will remain saved as long as you continue to access this page from the same browser.<br /> Built by Thomas Neal</p>
            </div>
            </div><br />
            </div>
            </div>
            :
              <h1>
              {this.state.actions.display ? 
                <NewRecipe 
                newRecipe={this.addRecipe}/>:
               <RecipeDisplay 
               newRecipe={this.addRecipe}  
               removeRecipe={this.deleteRecipe} 
               recipes={this.state.recipes} 
               clickedRecipe={this.state.actions.clicked} 
               display={this.handleNewRecipe}/>}
              </h1>
              }
            
       </div>
       </div>
     
    
    )

  }

}// end of Recipes component


export default Recipes;