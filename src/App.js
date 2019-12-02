import React, {Component} from 'react';
import Wrapper from './components/wrapper';
import Header from "./components/Header"; 
import Card from "./components/Card"; 
import zaku from "./zaku.json"; 
import './App.css';

function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }

  return array; 
}

class App extends Component {

  state = {
    zaku, 
    score: 0, 
    highscore: 0,
    clickedMobileSuits: []
  }; 

  clickedMS = id => {
    let clickedMobileSuits = this.state.clickedMobileSuits; 
    let score = this.state.score; 
    let highscore = this.state.highscore; 
    

    if(clickedMobileSuits.indexOf(id) === -1) {
      clickedMobileSuits.push(id); 
      this.handleIncrement(); 


      this.makeShuffle(); 
    
    } else if (this.state.score = 90) {
      this.setState({
        
        score: 0, 
        clickedMobileSuits: []
      }); 
    } else {
      this.setState({
        score: 0, 
        clickedMobileSuits: []
      }); 
    }

    if(score > highscore){
      this.setState({
        highscore: score
      }); 
    }

    
   
    
    
  }; 

  

  makeShuffle = () => {
    this.setState({ zaku: shuffle(zaku) }); 
  }; 
  
  handleIncrement = () => {
    this.setState({ score: this.state.score + 10}); 
  }; 
  

  
  
  
  
  render() {
    return (
      <Wrapper>
        <Header Score= {this.state.score} Highscore= {this.state.highscore}>Gundam Clicky Game</Header>
        
        
        {this.state.zaku.map(zaku =>(
          <Card
          clickedMS={this.clickedMS}
          id={zaku.id}
          name={zaku.name}
          image={zaku.image}
          />
        ))}
      </Wrapper>
    );
  }

};


export default App;
