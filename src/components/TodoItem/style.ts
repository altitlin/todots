import styled, { css } from 'styled-components';

import { IStyleSpan } from '../../interfaces/todos';

export const StyleLi = styled.li`
  display: grid;
  grid-template-columns: 11fr repeat(2, 0.5fr);
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.7em;
  margin-top: -1px;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const StyleSpan = styled.span<IStyleSpan>`
  ${({ iscompleted }) =>
    iscompleted &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyleButton = styled.button`
  padding: 0.3em;
  background-color: transparent;
  outline: none;
  border: none;
`;
