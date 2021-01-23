import styled from 'styled-components';

export const Logo = styled.img`
  height: 3em;
  padding: 1em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 2em;
  }
`;
export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.grey.light};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-bottom: 2px solid #999;
  }
`;

export const Wrapper = styled.div`
  max-width: 84em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const CartButtonDiv = styled.div`
  width: 25%;
  margin: auto 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 13%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 25%;
  }
`;
