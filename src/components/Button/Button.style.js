import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.red.light};
  line-height: 1em;
  font-weight: 600;
  border-radius: 25px;
  padding: 1em;
  font-size: 0.75rem;
  width: 100%;
  border: 0;
  margin-top: 3em;
  cursor: pointer;

  &&:hover {
    background-color: ${({ theme }) => theme.red.dark};
  }
`;
