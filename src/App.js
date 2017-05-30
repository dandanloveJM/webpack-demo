import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './reset.css'
import * as localStore from './localStore'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: localStore.load('todoList') || []
    }
    
  }
  render() {
    let Todo = this
    let todos = this.state.todoList
    .filter(function(item){
      return !item.deleted
    })
    .map(function(item, index){
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={Todo.toggle.bind(Todo)} 
          onDelete={Todo.delete.bind(Todo)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} 
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    );
  }
  componentDidUpdate(){
    localStore.save('todoList', this.state.todoList)
  }
  delete(event,todo){
    todo.deleted = true
    this.setState(this.state)
    console.log(todo.deleted)
    
  }
  toggle(e,todo){
    todo.status = todo.status === 'completed'? '' : 'completed'
    this.setState(this.state)
    //localStore.save('todoList', this.state.todoList)
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })

    this.setState({
      newTodo:'',
      todoList: this.state.todoList
    })
    //localStore.save('todoList', this.state.todoList)
    
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
    //localStore.save('todoList', this.state.todoList)
  }
  
}

export default App;

let id = 0

function idMaker(){
  id += 1
  return id
}