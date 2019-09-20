import * as React from 'react';
export var DisplayTodos = function (props) {
    return (React.createElement("div", null,
        React.createElement("ul", null, props.todos.map(function (todo, index) {
            return (React.createElement("li", { key: index, style: getStyle(todo) },
                React.createElement("input", { type: "checkbox", defaultChecked: todo.completed, onChange: function () {
                        props.toggleComplete(todo.id);
                    } }),
                todo.title,
                React.createElement("button", { style: { float: 'right' }, onClick: function () {
                        props.delTodo(todo.id);
                    } }, "X")));
        }))));
};
var getStyle = function (todo) {
    return {
        backgroundColor: '#BCBCBC',
        padding: '5px',
        borderBottom: '2px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    };
};
//# sourceMappingURL=DisplayTodos.js.map