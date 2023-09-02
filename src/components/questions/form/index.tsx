"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Form.module.scss"
// import utils
import { setValidateNumber } from '@/utils/setValidateNumber'

const FormQuestion = () => {
    const [formValid, setFormValid] = useState<boolean>(false);
    const [error, setError] = useState<string>("*");
    // validate name
    const [name, setName] = useState<string>("");
    // validate comment
    const [comment, setComment] = useState<string>("");
    // validate phone number
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [errorNumber, setErrorNumber] = useState<boolean>(false);

    const handleNumber = (e: any) => {
        const formattedPhoneNumber: any = setValidateNumber(e, setErrorNumber);
        setPhoneNumber(formattedPhoneNumber);
    }

    // disable button
    useEffect(() => {
        if (name == "" || phoneNumber == "" || errorNumber == true || comment == "") {
            setFormValid(false)
        } else {
            setFormValid(true);
        }
    }, [name, phoneNumber, comment, errorNumber])

    return (
        <>
            <h4 className={s.formTitle}>Замовити дзвінок</h4>
            <form className={s.form}>
                <div className={s.form__inputWrapper}>
                    {name == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Ім'я" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={s.form__inputWrapper}>
                    {phoneNumber == "" || errorNumber == true ? <span className={s.form__error}>{error}</span> : null}
                    <input className={errorNumber == true ? `${s.form__input} ${s.form__inputError}` : s.form__input} type="tel" placeholder="Номер телефону" value={phoneNumber} maxLength={14} onChange={(e) => handleNumber(e.target.value)} />
                </div>
                <div className={s.form__inputWrapper}>
                    {comment == "" ? <span className={s.form__error}>{error}</span> : null}
                    <textarea className={s.form__comment_textarea} placeholder="Коментар" onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <button disabled={!formValid} className={formValid ? `${s.form__btn} ${s.form__btnActive}` : s.form__btn}>Отримати дзвінок</button>
            </form>
        </>
    )
}

export default FormQuestion