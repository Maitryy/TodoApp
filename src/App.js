import React, {Component} from 'react';
import Todos from './todos'
import AddTodo from './addTodo'
class App extends Component{
  state = {
    todos: [
      { id: 1, content: 'complete the playlist'},
      { id: 2, content: 'watch attack on titan'}
    ]
  }

  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (newtodo) => {
    newtodo.id = Math.random();
    let todos = [...this.state.todos, newtodo];
    this.setState({
      todos  //shoreter method
    })
  }

  render(){
    return (
      <div className="App container">
        <div>
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} />
          <AddTodo addTodo = { this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
