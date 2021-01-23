import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { TrashIcon } from '../../assets';
import { toCurrency, qntyInCart } from '../../helpers/SharedFunctions';
import * as S from './CartProduct.style';

const CartProduct = ({ product }) => {
  const { removeProduct, cartItems } = useContext(CartContext);
  const productsInCart = qntyInCart(product.id, cartItems);
  const totalProductsSum = product.price * productsInCart;

  return (
    <S.FlexDiv>
      <S.ProductImg src={product.img} alt={product.title} />
      <S.TitleDiv>
        <S.StyledLink to="/">{product.title}</S.StyledLink>
        <S.QntyDiv>
          <S.QntyTag>{productsInCart} vnt.</S.QntyTag>
        </S.QntyDiv>
      </S.TitleDiv>
      <S.ButtonSection>
        <S.Button onClick={() => removeProduct(product)}>
          <S.Icon src={TrashIcon} alt="Delete-product" />
        </S.Button>
        <S.PriceTag>{toCurrency(totalProductsSum)}</S.PriceTag>
      </S.ButtonSection>
    </S.FlexDiv>
  );
};

export default CartProduct;
