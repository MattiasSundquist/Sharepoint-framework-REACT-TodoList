var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DisplayTodos } from './DisplayTodos';
import { AddTodo } from './AddTodo';
import uuid from 'uuidv4';
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            todos: [],
            todoId: 0
        };
        _this.handleAddTodo = function (newTitle) {
            _this.setState({ todos: _this.state.todos.concat([{ id: uuid(), title: newTitle, completed: false }]) });
        };
        // Bug: state updates correctly but the view is not.
        _this.handleDelTodo = function (id) {
            _this.setState({ todos: _this.state.todos.filter(function (todo) { return todo.id !== id; }).slice() });
        };
        _this.handleToggleComplete = function (id) {
            _this.setState({
                todos: _this.state.todos.map(function (todo) {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            });
        };
        return _this;
    }
    TodoList.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AddTodo, { addTodo: this.handleAddTodo }),
            React.createElement(DisplayTodos, { todos: this.state.todos, delTodo: this.handleDelTodo, toggleComplete: this.handleToggleComplete })));
    };
    return TodoList;
}(React.Component));
export default TodoList;
//# sourceMappingURL=TodoList.js.map