import styled from 'styled-components';

export const MainWrapper = styled.div``;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CounterButton = styled.button`
  border: 1px solid ${({ theme }) => theme.grey.light};
  border-radius: ${({ btnType }) =>
    btnType === 'minus' ? '30px 0 0 30px;' : '0 30px 30px 0;'};
  flex-grow: 1;
  font-size: 1.5rem;
  background: none;
  cursor: pointer;
  &&:hover {
    background-color: ${({ theme }) => theme.grey.hover};
  }
`;

export const MiddleDiv = styled.div`
  border-top: 1px solid ${({ theme }) => theme.grey.light};
  border-bottom: 1px solid ${({ theme }) => theme.grey.light};
  margin: auto 0;
  padding: 0.5em 2em;
`;

export const Text = styled.p`
  text-align: center;
  width: 100%;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.red.light};
  margin: 0;
  padding-bottom: 0.4em;
`;
