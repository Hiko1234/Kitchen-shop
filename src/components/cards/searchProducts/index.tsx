import React from 'react'
// import styles
import s from "./SearchProducts.module.scss"
// import img
import Image from 'next/image';
// import link
import Link from 'next/link';

const SearchProducts = (props: any) => {
    const { product, onClick } = props;

  return (
    <>
        <Link className={s.card} href={`catalog/${product.id}`} onClick={onClick}>
            <Image className={s.card__img} src={product.images[0]} alt={product.title} width={80} height={80} />
            <h4 className={s.card__title}>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</h4>
            <p className={s.card__price}>{product.price} грн</p>
        </Link>
    </>
  )
}

export default SearchProducts