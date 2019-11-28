import React, {Component} from 'react';
import Wrapper from './components/wrapper';
import Header from "./components/Header"; 
import Card from "./components/Card"; 
import zaku from "./zaku.json"; 
import './App.css';

class App extends Component {

  state = {
    zaku, 
    score: 0, 
    highscore: 0
  }; 
  
  
  
  
  render() {
    return (
      <Wrapper>
        <Header Score= {this.state.score} Highscore= {this.state.highscore}>Gundam Clicky Game</Header>
        
        {this.state.zaku.map(zaku =>(
          <Card
          clicks={this.clickCount}
          id={zaku.id}
          name={zaku.name}
          image={zaku.image}
          />
        ))}
      </Wrapper>
    );
  }

}


export default App;
