"use client"

import React, { useState, useEffect } from 'react';
// import styles
import s from './Products.module.scss';
// import components
import Container from '@/components/container';
import Product from '@/components/cards/product';
// import loading
import Loading from '@/components/loading';
// import data
import productsList from '@/data/products/products.json';
// import utils
import { getRandomObjects } from '@/utils/getRandomObject';

const HomePageProducts = () => {
  const [products, setProducts] = useState(Object.values(productsList));
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setRandomProducts(getRandomObjects(products, 4));
  }, [products]);

  return (
    <>
      <div className={s.products}>
        <Container key="container">
          <h4 className={s.products__title}>Популярні товари</h4>
          <div className={s.products__cards}>
            {products ? (
              <>
                {randomProducts.map((product: any) => (
                  <Product key={product.id} product={product} />
                ))}
              </>
            ) : (
              <Loading key="loading" />
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePageProducts;