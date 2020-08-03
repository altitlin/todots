import { ChangeEvent, KeyboardEvent } from 'react';

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITodoItemProps extends ITodo {
  removeTodo: (id: string) => void;
  updateTodo: (id: string) => void;
}

export interface ITodoListProps {
  todos: Array<ITodo>;
  removeTodo: (id: string) => void;
  updateTodo: (id: string) => void;
}

export interface ITodoInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface ITodoFooterProps {
  amount: number;
  activeFilter: string;
  changeFilter: (filter: string) => void;
}

export interface IStyleSpan {
  iscompleted: boolean;
}

export interface IStyleButton {
  isFilter: boolean;
}
