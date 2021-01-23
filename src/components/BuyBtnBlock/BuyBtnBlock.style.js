import styled from 'styled-components';

export const MainWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 1.5em 1em;
  height: 6em;
  width: 100%;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  flex-shrink: 0;
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;
  margin-right: 2em;
  color: #fff;
  background-color: ${({ theme }) => theme.red.light};
  line-height: 1em;
  font-weight: 600;
  border-radius: 3px;
  border: 0;
  cursor: pointer;

  &&:hover {
    background-color: ${({ theme }) => theme.red.dark};
  }

  &&:disabled {
    background-color: ${({ theme }) => theme.grey.light};
    color: #999;
    cursor: not-allowed;
  }
`;

export const PriceTitle = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.grey.dark};
`;

export const PriceTag = styled.span`
  margin-top: 0.4em;
  padding-left: 0.2em;
  font-weight: 700;
`;

export const Icon = styled.img`
  width: 0.8em;
  margin-left: 0.4em;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const FlexPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2em;
`;
