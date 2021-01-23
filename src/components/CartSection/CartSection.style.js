import styled from 'styled-components';

export const CartSection = styled.div`
  width: 25%;
  background-color: ${({ theme }) => theme.background.basket};
  border-left: 1px solid ${({ theme }) => theme.grey.light};
  border-right: 1px solid ${({ theme }) => theme.grey.light};
  display: flex;
  flex-direction: column;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 1em;
  font-size: 0.8125rem;
  line-height: 1em;
  font-weight: 600;
`;

export const CartProductsBlock = styled.div`
  padding: 0.8em;
  flex: 1 0 auto;
`;
