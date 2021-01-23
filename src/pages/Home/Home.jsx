import React from 'react';
import { ProductCard, CartSection } from '../../components';
import * as S from './Home.style';
import products from '../../utils/products';

const Home = () => {
  return (
    <S.MainWrapper>
      <S.ProductsFlex>
        <ProductCard products={products} />
      </S.ProductsFlex>

      <CartSection />
    </S.MainWrapper>
  );
};

export default Home;
