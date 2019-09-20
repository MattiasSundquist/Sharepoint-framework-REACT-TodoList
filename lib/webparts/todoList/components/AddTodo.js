import * as React from 'react';
export var AddTodo = function (props) {
    var _a = React.useState(""), input = _a[0], setInput = _a[1];
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", placeholder: "Add todo...", value: input, onChange: function (e) {
                setInput(e.target.value);
            }, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    props.addTodo(input);
                    setInput("");
                }
            } }),
        React.createElement("button", { onClick: function () {
                props.addTodo(input);
                setInput("");
            } }, "Add Todo")));
};
//# sourceMappingURL=AddTodo.js.map