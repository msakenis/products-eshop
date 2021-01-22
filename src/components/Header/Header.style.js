import styled from 'styled-components';

export const Logo = styled.img`
  height: 3em;
  padding: 1em;
`;
export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.grey.light};
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
`;
