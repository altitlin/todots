import React from 'react';

import { ITodoItemProps } from '../../interfaces/todos';

import { StyleLi, StyleSpan, StyleButton } from './style';

const TodoItem = ({ id, title, isCompleted, removeTodo, updateTodo }: ITodoItemProps): React.ReactElement => (
  <StyleLi>
    <StyleSpan iscompleted={isCompleted}>{title}</StyleSpan>
    <StyleButton onClick={() => removeTodo(id)}>&#10006;</StyleButton>
    <StyleButton onClick={() => updateTodo(id)}>&#10004;</StyleButton>
  </StyleLi>
);

export default TodoItem;
