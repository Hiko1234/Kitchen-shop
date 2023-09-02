"use client"

import React, { useState } from 'react'
// import styles
import s from "./Question.module.scss"
// import img
import Image from 'next/image'
import icon from "../../../../assets/images/arrow.png"

const ItemQuestion = (props: any) => {
    const { data } = props;
    const { question, answer } = data;
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState<any>([]);
    // function open question
    const handle = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { maxHeight: "1000px", opacity: "1", paddingTop: "30px" }
            })
        }
    }

    return (
        <>
            <li className={s.question}>
                <div className={s.question__question} onClick={handle}><p>{question}</p><Image className={isOpen ? `${s.question__question_img} ${s.question__question_imgActive}` : s.question__question_img} src={icon} alt="Arrow" width={27} height={16} /></div>
                <p className={s.question__answer} style={hideOrShow}>{answer}</p>
            </li>
        </>
    )
}

export default ItemQuestion