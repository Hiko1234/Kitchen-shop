"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Form.module.scss"
// import link
import Link from 'next/link'
// import utils
import { setValidateNumber } from '@/utils/setValidateNumber'

const DeliveryForm = () => {
    const [formValid, setFormValid] = useState<boolean>(false);
    const [error, setError] = useState<string>("*");
    // validate name
    const [name, setName] = useState<string>("");
    // validate city
    const [city, setCity] = useState<string>("");
    // validate department
    const [department, setDepartment] = useState<string>("");
    // validate phone number
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [errorNumber, setErrorNumber] = useState<boolean>(false);

    const handleNumber = (e: any) => {
        const formattedPhoneNumber: any = setValidateNumber(e, setErrorNumber);
        setPhoneNumber(formattedPhoneNumber);
    }

    // disable button
    useEffect(() => {
        if (name == "" || phoneNumber == "" || errorNumber == true || city == "" || department == "") {
            setFormValid(false)
        } else {
            setFormValid(true);
        }
    }, [name, phoneNumber, city, department, errorNumber])

    return (
        <>
            <form className={s.form}>
                <div className={s.form__inputWrapper}>
                    {name == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Ім'я*" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={s.form__inputWrapper}>
                    {phoneNumber == "" || errorNumber == true ? <span className={s.form__error}>{error}</span> : null}
                    <input className={errorNumber == true ? `${s.form__input} ${s.form__inputError}` : s.form__input} type="tel" placeholder="Номер телефону*" value={phoneNumber} maxLength={14} onChange={(e) => handleNumber(e.target.value)} />
                </div>
                <div className={s.form__inputWrapper}>
                    {city == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Місто*" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className={s.form__inputWrapper}>
                    {department == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="number" min={1} placeholder="Номер відділення нової пошти*" onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <div className={s.form__buttons}>
                    <button disabled={!formValid} className={formValid ? `${s.form__buttons_submit} ${s.form__buttons_submitActive}` : s.form__buttons_submit}>Оформити покупку</button>
                    <Link className={s.form__buttons_link} href="/catalog">Продовжити покупки</Link>
                </div>
            </form>
        </>
    )
}

export default DeliveryForm