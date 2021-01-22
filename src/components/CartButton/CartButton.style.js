import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.grey.light};
  cursor: pointer;
  padding: 1em 1.6em;
  min-height: 3em;
  border-radius: 25px;
  background: none;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 0.75rem;
  font-weight: 700;
  &&:hover {
    background-color: ${({ theme }) => theme.grey.hover};
  }
`;

export const Icon = styled.img`
  width: 1.3em;
  height: 1.3em;
  margin-right: 0.8em;
`;

export const NumberDiv = styled.div`
  position: absolute;
  padding: 0.2em 0.4em;
  border-radius: 10px;
  color: #fff;
  font-size: 0.6rem;
  top: 0.3em;
  left: 2.7em;
  font-weight: 600;
  background-color: ${({ theme }) => theme.red.light};
`;
