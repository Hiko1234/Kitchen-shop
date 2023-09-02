import React from 'react'
// import styles
import s from "./Product.module.scss"
// import link
import Link from 'next/link';
// import img
import Image from 'next/image';
// import components
import AddToCartBtn from '@/components/buttons/addToCart';
import FavoritesBtn from '@/components/buttons/favorites';

const Product = (props: any) => {
    const { product } = props;

    return (
        <>
            <div className={s.card}>
                <div className={s.card__wrapper}>
                    <div className={s.card__favorites}>
                        {product.isNew ? <div className={s.card__favorites_isNew}>Нове</div> : null}
                        <div className={s.card__favorites_btn}><FavoritesBtn product={product} /></div>
                    </div>
                    <Link href={`catalog/${product.id}`}>
                        <Image className={s.card__img} src={product.images[0]} alt={product.title} width={261} height={250} />
                    </Link>
                    <div className={s.card__data}>
                        <Link className={s.card__link} href={`catalog/${product.id}`}>
                            <h6 className={s.card__data_title}>{product.title.length > 25 ? product.title.slice(0, 25) + "..." : product.title}</h6>
                            <p className={s.card__data_producer}>{product.producer}</p>
                        </Link>
                        <div className={s.card__data_functional}>
                            <Link className={s.card__data_functionalItem} href={`catalog/${product.id}`}>
                                <p className={s.card__data_price}>{product.price} грн</p>
                                <p className={s.card__data_inStock}>В наявності</p>
                            </Link>
                            <AddToCartBtn key={product.id} product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product