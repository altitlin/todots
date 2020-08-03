import React from 'react';

import { ITodoListProps } from '../../interfaces/todos';

import TodoItem from '../TodoItem/TodoItem';

import { StyledUl } from './style';

const TodoList = ({ todos, removeTodo, updateTodo }: ITodoListProps): React.ReactElement => (
  <StyledUl>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} updateTodo={updateTodo} />
    ))}
  </StyledUl>
);

export default TodoList;
