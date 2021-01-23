import React, { useContext } from 'react';
import * as S from './CartCounter.style';
import { CartContext } from '../../contexts/cart.context';
import { qntyInCart } from '../../helpers/SharedFunctions';

const CartCounter = ({ product }) => {
  const { increase, decrease, cartItems, removeProduct } = useContext(
    CartContext,
  );
  const productsInCart = qntyInCart(product.id, cartItems);

  return (
    <S.MainWrapper>
      <S.Text>
        Krepšelyje <strong>{productsInCart} vnt.</strong>
      </S.Text>
      <S.FlexWrapper>
        {productsInCart > 1 && (
          <S.CounterButton onClick={() => decrease(product)} btnType="minus">
            &#8722;
          </S.CounterButton>
        )}
        {productsInCart === 1 && (
          <S.CounterButton
            onClick={() => removeProduct(product)}
            btnType="minus"
          >
            &#8722;
          </S.CounterButton>
        )}
        <S.MiddleDiv>{productsInCart} vnt.</S.MiddleDiv>
        <S.CounterButton onClick={() => increase(product)} btnType="plus">
          &#43;
        </S.CounterButton>
      </S.FlexWrapper>
    </S.MainWrapper>
  );
};

export default CartCounter;
