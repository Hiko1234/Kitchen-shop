"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Suppliers.module.scss"
// import components
import Container from '../container'
// import link
import Link from 'next/link'
// import img
import Image from 'next/image'
import logo1 from "../../assets/images/suppliers/logo1.png"
import logo2 from "../../assets/images/suppliers/logo2.png"
import logo3 from "../../assets/images/suppliers/logo3.png"
import logo4 from "../../assets/images/suppliers/logo4.png"
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const suppliers = [
    { id: 1, logo: logo1, path: "https://www.bosch.ua/" },
    { id: 2, logo: logo2, path: "https://www.franke.com/ua/uk/home.html" },
    { id: 3, logo: logo3, path: "/" },
    { id: 4, logo: logo4, path: "https://fabiano.com.ua/" },
]

const Suppliers = () => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2);

    useEffect(() => {
        if (window.innerWidth <= 479.98) {
            setSlidesPerView(1);
        }
    }, []);

    return (
        <>
            <div className={s.suppliers}>
                <Container>
                    <div className={s.suppliers__body}>
                        {suppliers.map((supplier) => (
                            <Link key={supplier.id} className={s.suppliers__link} href={supplier.path} target="_blank">
                                <Image className={s.suppliers__link_img} src={supplier.logo} alt="Supplier" />
                            </Link>
                        ))}
                    </div>
                </Container>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className={s.suppliers__slider}
                >
                    {suppliers.map((supplier) => (
                        <SwiperSlide className={s.suppliers__slideWrapper} key={supplier.id}>
                            <Link className={s.suppliers__link} href={supplier.path} target="_blank">
                                <Image className={s.suppliers__link_img} src={supplier.logo} alt="Supplier" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Suppliers