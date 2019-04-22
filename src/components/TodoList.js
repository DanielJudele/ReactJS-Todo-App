import React from 'react';
import './TodoList.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showDetail: !this.state.showDetail})
  }
  render() {
    return (
      <li>
         <a onClick={this.onClick.bind(this)} href='#'>{this.props.item.value} [Priority: {this.props.item.priority}]</a>
        {this.state.showDetail && <TodoItemDetails details={this.props.item.details}/>}
      </li>
    )
  }
}

class TodoItemDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    var details = this.props.details;
    return(
      <div className="Todo-Item-Details"> <p>{details}</p><button type="button">High importance</button> </div>
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