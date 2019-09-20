import * as React from 'react';
import { ITodoItem } from './ITodoItem';
export interface ITodos {
    todos: ITodoItem[];
    toggleComplete(id: any): any;
}
export declare class Todos extends React.Component<ITodos, {}> {
    render(): React.ReactElement<ITodos>;
}
//# sourceMappingURL=Todos.d.ts.map