import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: 84em;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

export const ProductsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 75%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;
