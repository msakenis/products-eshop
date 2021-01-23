import React, { useContext } from 'react';
import * as S from './BuyBtnBlock.style';
import { BasketIcon } from '../../assets';
import { CartContext } from '../../contexts/cart.context';
import { toCurrency } from '../../helpers/SharedFunctions';

const BuyBtnBlock = () => {
  const { totalSum, cartItems } = useContext(CartContext);

  return (
    <S.MainWrapper>
      <S.Button
        disabled={!(cartItems.length > 0)}
        onClick={() => console.log('Pushing to checkout')}
      >
        Pirkti
      </S.Button>

      <S.FlexPriceBlock>
        <S.FlexDiv>
          <S.PriceTitle>Kaina</S.PriceTitle>
          <S.Icon src={BasketIcon} alt="basket" />
        </S.FlexDiv>

        <S.PriceTag>{toCurrency(totalSum)}</S.PriceTag>
      </S.FlexPriceBlock>
    </S.MainWrapper>
  );
};

export default BuyBtnBlock;
