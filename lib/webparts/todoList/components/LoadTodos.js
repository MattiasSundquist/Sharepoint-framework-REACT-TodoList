import * as React from 'react';
export var LoadTodos = function (props) {
    return (React.createElement("div", null,
        React.createElement("ul", null, props.todos.map(function (todo, index) {
            return React.createElement("li", { key: index }, todo.title);
        }))));
};
//# sourceMappingURL=LoadTodos.js.map