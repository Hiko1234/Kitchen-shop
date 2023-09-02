"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./SingleProduct.module.scss"
// import components
import Container from '@/components/container'
import AddToCartBigBtn from '@/components/buttons/addToCartBigBtn'
import AddToFavoritesBigBtn from '@/components/buttons/addToFavoritesBigBtn'
import ScrollTabs from '@/components/scrollTabs'
import Product from '../product'
// import loading
import Loading from '@/components/loading'
// import data
import productsList from "@/data/products/products.json";
// import img
import Image from 'next/image'
// import scroll element
import { Element } from "react-scroll"
// import utils
import { getRandomObjects } from '@/utils/getRandomObject'

const CardSingleProduct = (props: any) => {
  const { product } = props;
  const [image, setImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [products, setProducts] = useState(Object.values(productsList));
  const [randomProducts, setRandomProducts] = useState([])

  useEffect(() => {
    setRandomProducts(getRandomObjects(products, 4));
  }, [])



  return (
    <>
      <Container key="container">
        <div className={s.card}>
          <div className={s.card__images}>
            <div className={s.card__images_mainImgWrapper}>
              <Image className={s.card__images_mainImg} src={product.images[image]} alt={product.title} width={420} height={420} />
            </div>
            <div className={s.card__images_secondaryImages}>
              {product.images.slice(0, 5).map((img: any, index: number) => (
                <Image key={`image${index}`} className={image == index ? `${s.card__images_secondaryImg} ${s.card__images_secondaryImgActive}` : s.card__images_secondaryImg} key={index} src={img} alt={product.title} width={110} height={110} onClick={() => setImage(index)} />
              ))}
            </div>
          </div>
          <div className={s.card__info}>
            <div className={s.card__data}>
              <div className={s.card__data_container}>
                <div className={s.card__data_about}>
                  <h4 className={s.card__data_title}>{product.title}</h4>
                  <span className={s.card__data_producer}>{product.producer}</span>
                </div>
                <ul className={s.card__data_list}>
                  {product.features.slice(0, 5).map((feature: any, index: number) => (
                    <li className={s.card__data_li} key={`features${index}`}>{feature.label}: {feature.value}</li>
                  ))}
                </ul>
                <div className={s.card__data_colors}>
                  <h6 className={s.card__data_color}>Колір виробника: <span>{product.colors[selectedColor]}</span></h6>
                  <div className={s.card__data_colorBtnWrapper}>
                    {product.colors.map((color: string, index: number) => (
                      <button className={selectedColor == index ? `${s.card__data_colorBtn} ${s.card__data_colorBtnActive}` : s.card__data_colorBtn} key={`color${index}`} onClick={() => setSelectedColor(index)}>{color}</button>
                    ))}
                  </div>
                </div>
                <p className={s.card__data_price}>{product.price} грн</p>
                <p className={s.card__data_inStock}>В наявності</p>
                <div className={s.card__buttons}>
                  <AddToCartBigBtn key={`AddToCart${product.id}`} product={product} />
                  <AddToFavoritesBigBtn key={`AddToFavorites${product.id}`} product={product} />
                </div>
              </div>
            </div>
            <ScrollTabs key="tabs" selected={setSelectedTab} data={selectedTab} />
          </div>
        </div>
        <Element key="characteristic" name="characteristic">
          <div className={s.characteristic}>
            <h4 className={s.tab__title}>Характеристики</h4>
            <div className={s.characteristic__features}>
              {product.features.map((feature: any, index: number) => (
                <div className={s.characteristic__features_feature} key={index}><span>{feature.label}:</span><span>{feature.value}</span></div>
              ))}
            </div>
          </div>
        </Element>
        <Element key="description" name="description">
          <div className={s.description}>
            <h4 className={s.tab__title}>Опис</h4>
            <p className={s.description__text}>{product.title}. Виробник {product.producer}. Ціна {product.price} грн.</p>
          </div>
        </Element>
        <Element key="reviews" name="reviews"></Element>
        <Element key="popular" name="popular">
          <div className={s.new}>
            <h4 className={s.new__title}>Популярні товари</h4>
            <div className={s.new__cards}>
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
          </div>
        </Element>
      </Container>
    </>
  )
}

export default CardSingleProduct