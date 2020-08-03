import React from 'react';

import { ITodoFooterProps } from '../../interfaces/todos';

import { StyleDiv, StyleButton } from './style';

const BUTTONS_FILTER: Array<{ text: string; id: string }> = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Done',
    id: 'done',
  },
];

const TodoFooter = ({ amount, activeFilter, changeFilter }: ITodoFooterProps): React.ReactElement => (
  <StyleDiv>
    <span>{amount}</span>
    <div>
      {BUTTONS_FILTER.map(({ text, id }) => (
        <StyleButton key={id} isFilter={id === activeFilter ? true : false} onClick={() => changeFilter(id)}>
          {text}
        </StyleButton>
      ))}
    </div>
  </StyleDiv>
);

export default TodoFooter;
