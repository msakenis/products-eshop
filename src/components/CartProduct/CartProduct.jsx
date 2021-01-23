import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { TrashIcon } from '../../assets';
import { toCurrency, qntyInCart } from '../../helpers/SharedFunctions';
import { CartCounter } from '../';
import * as S from './CartProduct.style';
import { shape, number, string, bool } from 'prop-types';

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
          {window.innerWidth > 1150 ? (
            <S.QntyTag>{productsInCart} vnt.</S.QntyTag>
          ) : (
            <CartCounter product={product} />
          )}
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

CartProduct.propTypes = {
  product: shape({
    id: number.isRequired,
    img: string.isRequired,
    title: string.isRequired,
    price: number.isRequired,
    glutenFree: bool,
  }),
};

export default CartProduct;
