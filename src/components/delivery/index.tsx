"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Delivery.module.scss"
// import components
import DeliveryForm from './form'
// import img
import Image from 'next/image'
import icon from "../../assets/images/arrow.png"


const Delivery = ({ delivery, setDelivery }: any) => {
    // function open
    const handle = () => {
        setDelivery((prev: any) => !prev);
    }

    return (
        <>
            <div className={s.delivery}>
                <div className={s.delivery__handle} onClick={handle}><span>Доставка</span><Image className={delivery ? `${s.delivery__handle_img} ${s.delivery__handle_imgActive}` : s.delivery__handle_img} src={icon} alt="Arrow" width={19} height={10} /></div>
                <div className={delivery ? `${s.delivery__form} ${s.delivery__formActive}` : s.delivery__form}>
                    <DeliveryForm key="deliveryform" />
                </div>
            </div>
        </>
    )
}

export default Delivery