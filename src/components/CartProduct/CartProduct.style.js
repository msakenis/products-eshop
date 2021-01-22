import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  padding: 1em 0.7em;
  box-sizing: border-box;
  min-height: 6em;
  &&:first-child {
    border-radius: 5px 5px 0 0;
  }
  &&:last-child {
    border-radius: 0 0 5px 5px;
  }
  &&:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 1em;
  font-weight: 600;
  color: ${({ theme }) => theme.grey.dark};

  &&:hover {
    color: ${({ theme }) => theme.red.light};
  }
`;

export const ProductImg = styled.img`
  object-fit: contain;
  width: 25%;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
`;
export const Button = styled.button`
  background: none;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1em;
  padding: 0.2em;

  &&:hover {
    filter: invert(18%) sepia(0%) saturate(0%) hue-rotate(143deg)
      brightness(96%) contrast(81%);
  }
`;

export const PriceTag = styled.p`
  line-height: 1;
  font-size: 0.8125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.red.light};
  margin: 0;
`;

export const QntyDiv = styled.div`
  width: 100%;
`;

export const QntyTag = styled.span`
  border: 1px solid ${({ theme }) => theme.grey.light};
  padding: 0.2em;
  font-size: 0.8rem;
`;
