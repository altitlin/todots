import React from 'react';

import { ITodoInputProps } from '../../interfaces/todos';

import { StyledInput } from './style';

const TodoInput = ({ value, onChange, onKeyPress }: ITodoInputProps): React.ReactElement => (
  <StyledInput type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="Enter a new todo" />
);

export default TodoInput;
