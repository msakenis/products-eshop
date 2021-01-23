import styled from 'styled-components';

export const CartSection = styled.div`
  width: 25%;
  background-color: ${({ theme }) => theme.background.basket};
  border-left: 1px solid ${({ theme }) => theme.grey.light};
  border-right: 1px solid ${({ theme }) => theme.grey.light};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  // styled-components accepts non-boolean values only
  @media (max-width: ${({ theme }) => theme.tablet}) {
    transform: ${({ display }) =>
      display === 'true' ? 'translateX(0)' : 'translateX(-100%)'};
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
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

export const Icon = styled.img`
  width: 2em;
  height: 2em;
  filter: invert(63%) sepia(0%) saturate(8%) hue-rotate(287deg) brightness(98%)
    contrast(83%);
`;

export const FlexClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  margin-bottom: 1em;

  &&:hover {
    filter: invert(21%) sepia(75%) saturate(3550%) hue-rotate(344deg)
      brightness(95%) contrast(86%);
  }
`;
