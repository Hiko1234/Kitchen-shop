"use client"

import React, { useState } from 'react'
// import styles
import s from "./Sort.module.scss"
// import img
import Image from 'next/image'
import icon from "../../assets/images/arrow.png"

const Sort = (props: any) => {
    const { sortFromFirstLetter, sortFromLastLetter } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState<any>([]);
    // function open burger
    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { opacity: "1", visibility: "visible" }
            })
        }
    }
    return (
        <>
            <div className={s.sort}>
                <div className={s.sort__btn} onClick={handleMenu}><span>Сортувати за</span><Image className={isOpen ? `${s.sort__btn_img} ${s.sort__btn_imgActive}` : s.sort__btn_img} src={icon} alt="Arrow" width={18} height={10} /></div>
                <ul className={s.sort__list} style={hideOrShow}>
                    <div className={s.sort__sort} onClick={sortFromFirstLetter}>Сортування від А до Я</div>
                    <div className={s.sort__sort} onClick={sortFromLastLetter}>Сортування від Я до А</div>
                </ul>
            </div>
        </>
    )
}

export default Sort