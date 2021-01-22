import React from 'react';
import * as S from './CartCounter.style';

const CartCounter = () => {
  return (
    <S.MainWrapper>
      <S.Text>
        Krepšelyje <strong>1 vnt.</strong>
      </S.Text>
      <S.FlexWrapper>
        <S.CounterButton btnType="minus">&#8722;</S.CounterButton>
        <S.MiddleDiv>1 vnt.</S.MiddleDiv>
        <S.CounterButton btnType="plus">&#43;</S.CounterButton>
      </S.FlexWrapper>
    </S.MainWrapper>
  );
};

export default CartCounter;
