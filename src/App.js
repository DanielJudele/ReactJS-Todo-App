import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="App-content">
          <h2>TODAY</h2>           
          <TodoList items={this.props.initItems} />         
       </div>      
      </div>
    );
  }
}

export default App;
