import * as React from 'react';

export const DisplayTodos = props => {
  return (
    <div>
      <ul>
        {
          props.todos.map((todo, index) => {
            return (
              <li key={index} style={getStyle(todo)}>
                <input 
                  type="checkbox" 
                  defaultChecked={todo.completed}
                  onChange={() => {
                    props.toggleComplete(todo.id)
                  }}
                />
                {todo.title}
                <button style={{ float: 'right' }} onClick={() => {
                  props.delTodo(todo.id)
                }}>X</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const getStyle = (todo) => {
  return {
    backgroundColor: '#BCBCBC',
    padding: '5px',
    borderBottom: '2px #ccc dotted',
    textDecoration: todo.completed ? 'line-through' : 'none'
  };
}