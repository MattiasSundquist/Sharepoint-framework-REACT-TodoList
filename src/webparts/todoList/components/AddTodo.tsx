import * as React from 'react';

export const AddTodo = props => {

  const [input, setInput] = React.useState("");

  return (
    <div>
      <input 
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.addTodo(input);
            setInput("");    
          }
        }}
      />

      <button onClick={() => {
        props.addTodo(input);
        setInput("");
      }}>Add Todo</button>
    </div>
  );
};