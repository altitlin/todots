import styled, { css } from 'styled-components';

import { IStyleButton } from '../../interfaces/todos';

export const StyleDiv = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
`;

export const StyleButton = styled.button<IStyleButton>`
  margin-right: 0.5em;
  padding: 0.4em 0.8em;
  border-radius: 5px;
  outline: none;
  border: none;

  ${({ isFilter }) =>
    isFilter &&
    css`
      color: #fff;
      background-color: blue;
      opacity: 0.8;
    `}
`;
