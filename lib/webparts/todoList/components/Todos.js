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
var Todos = /** @class */ (function (_super) {
    __extends(Todos, _super);
    function Todos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Todos.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, this.props.todos.map(function (todoItem) { return (React.createElement("p", { style: {
                padding: '5px',
                borderBottom: '1px #ccc dotted',
                textDecoration: todoItem.completed ? 'line-through' : 'none'
            } },
            React.createElement("input", { type: "checkbox", style: { cursor: 'pointer' }, defaultChecked: todoItem.completed, onChange: _this.props.toggleComplete.bind(_this, todoItem.id) }),
            ' ',
            todoItem.title,
            React.createElement("button", { style: {
                    fontSize: '10px',
                    cursor: 'pointer',
                    float: 'right'
                } }, "X"))); })));
    };
    return Todos;
}(React.Component));
export { Todos };
//# sourceMappingURL=Todos.js.map