"use client"

import React, { useState } from 'react'
// import styles
import s from "./SingleProduct.module.scss"
// import components
import CardSingleProduct from '@/components/cards/singleProduct'
// import router
import { usePathname } from 'next/navigation'
// import data
import productsList from "@/data/products/products.json";
// import utils
import { getItemById } from '@/utils/getItemById'

const SingleProduct = () => {
    // Отримання id з router.query
    const pathname = usePathname();
    const id = pathname.slice(9);

    const [products, setProducts] = useState(Object.values(productsList));
    const [product, setProduct] = useState(getItemById(id, products));

    return (
        <>
            <div className={s.singleProduct}>
                <div className={s.singleProduct__card}>
                    <CardSingleProduct key={product.id} product={product} />
                </div>
            </div>
        </>
    )
}

export default SingleProduct