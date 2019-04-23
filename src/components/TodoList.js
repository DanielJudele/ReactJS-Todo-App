import React from 'react';
import './TodoList.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      priority: ''
    }

    this.handler = this.handler.bind(this);
  }
  
  // This method will be sent to the child component
  handler(e) {
    e.preventDefault();
    this.setState({
      priority: '[High priority]'
    });
  }

  onClick(e){
    e.preventDefault();
    this.setState({view: !this.state.view})
  }
  render() {
    return (
      <li onClick={this.onClick.bind(this)} >
         <span >{this.props.item.value} <span style={{color: 'red'}}>{this.state.priority}</span></span>
        {this.state.view && <TodoItemDetails details={this.props.item.details} action={this.handler}/>}
      </li>
    )
  }
}

class TodoItemDetails extends React.Component {    
  render(){
    return(
      <div className="Todo-Item-Details"> <p>{this.props.details}</p><button onClick={this.props.action} type="button">Urgent</button> </div>
    )
  }
}

class TodoList extends React.Component {    
    render() {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoItem key={index} item={item}/>
        );
      });
      return (<div className="Todo-List"><div className="Todo-Item"><ul>{items}</ul></div></div>)
    }
  }

  export default TodoList;