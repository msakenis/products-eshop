import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AllBlockDiv = styled.div`
  padding: 1em;
  margin: 0.5em;
  background-color: #fff;
  width: calc(25% - 1em);
  box-sizing: border-box;
  height: 24em;
  border: 1px solid ${({ theme }) => theme.grey.light};
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Icon = styled.img`
  max-width: 1.2em;
  padding-left: 0.3em;
  filter: invert(18%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(96%)
    contrast(81%);
  &&:last-child {
    &&:hover {
      filter: invert(60%) sepia(94%) saturate(6696%) hue-rotate(339deg)
        brightness(89%) contrast(99%);
      cursor: pointer;
    }
  }
`;

export const ProductImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 9.25em;
`;

export const ProductImgDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-size: 0.9375rem;
  display: block;
  text-align: center;
  color: #000;
  text-decoration: none;
  line-height: 1.2;
  height: 5em;
  margin: 0.3em 0;
  &&:hover {
    color: ${({ theme }) => theme.red.light};
  }
`;

export const PriceTag = styled.p`
  font-size: 1.625rem;
  color: ${({ theme }) => theme.red.light};
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

export const ButtonDiv = styled.div``;
