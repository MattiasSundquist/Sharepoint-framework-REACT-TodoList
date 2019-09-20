import * as React from 'react';
import { ITodoListProps } from './ITodoListProps';
import { DisplayTodos } from './DisplayTodos';
import { AddTodo } from './AddTodo';
import uuid from 'uuidv4';

export default class TodoList extends React.Component<ITodoListProps, {}> {

  state = {
    todos: [],
    todoId: 0
  }

  public render(): React.ReactElement<ITodoListProps> {
    return (
      <div>
        <AddTodo addTodo={this.handleAddTodo} />
        <DisplayTodos 
          todos={this.state.todos} 
          delTodo={this.handleDelTodo} 
          toggleComplete={this.handleToggleComplete}  
        />
      </div>
    )
  }
  
  handleAddTodo = (newTitle: string) => {
    this.setState({todos: [...this.state.todos, {id:uuid(), title:newTitle, completed:false}]})
  }

  // Bug: state updates correctly but the view is not.
  handleDelTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  handleToggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
}