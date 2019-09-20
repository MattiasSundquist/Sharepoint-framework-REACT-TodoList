import * as React from 'react';
import { ITodoListProps } from './ITodoListProps';
export default class TodoList extends React.Component<ITodoListProps, {}> {
    state: {
        todos: any[];
        todoId: number;
    };
    render(): React.ReactElement<ITodoListProps>;
    handleAddTodo: (newTitle: string) => void;
    handleDelTodo: (id: any) => void;
    handleToggleComplete: (id: any) => void;
}
//# sourceMappingURL=TodoList.d.ts.map