"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Form.module.scss"
// import link
import Link from 'next/link'
// import utils
import { setValidateNumber } from '@/utils/setValidateNumber'
import { sendTelegram } from '@/utils/sendTelegram'
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';
// import redux
import { useSelector, useDispatch } from 'react-redux'
import { clearProduct } from '@/app/store/features/cart/cartSlice'

const DeliveryForm = ({ setPopup, setPopupError, setLoading }: any) => {
    const [formValid, setFormValid] = useState<boolean>(false);
    const [error, setError] = useState<string>("*");
    // validate name
    const [name, setName] = useState<string>("");
    const [nameEmpty, setNameEmpty] = useState<string>("");
    // validate city
    const [city, setCity] = useState<string>("");
    const [cityEmpty, setCityEmpty] = useState<string>("");
    // validate department
    const [department, setDepartment] = useState<string>("");
    const [departmentEmpty, setDepartmentEmpty] = useState<string>("");
    // validate phone number
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
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
    }, [name, phoneNumber, city, department, errorNumber]);

    // data from localStorage
    const cartData = getItemFromLS("cart");
    // redux
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        // send message to telegram
        const chatID: string = "-4016770272";
        const upiAPI: string = `https://api.telegram.org/bot6637841024:AAEyyaFAm_WTUGj8lk43Q-tfaokq3GFILdA/`;

        try {
            // send message
            let message = `Доставка; `
            message += `Ім'я: ${name}; `;
            message += `Номер телефону: ${phone}; `;
            message += `Місто: ${city}; `;
            message += `Відділення нової пошти: ${department} |`;
            // cart products
            cartData?.map((product: any, index: number) => {
                message += `| Продукт № ${index + 1}; `
                message += `Ідентифікатор: ${product.id}; `
                message += `Заголовок: ${product.title}; `
                message += `Ціна: ${product.price} грн; `
                message += `Кількість: ${product.count} |`
            });

            await sendTelegram(message, upiAPI, chatID);

            setNameEmpty("");
            setPhoneNumber("");
            setCityEmpty("");
            setDepartmentEmpty("");
            setLoading(true);
        } catch {
            setPopupError(true)
            setTimeout(() => { setPopupError(false) }, 5000);
        } finally {
            dispatch(clearProduct(items.id));
            setLoading(false);
            setPopup(true)
            setTimeout(() => { setPopup(false) }, 5000);
        }
    };

    return (
        <>
            <form className={s.form}>
                <div className={s.form__inputWrapper}>
                    {name == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Ім'я*" value={nameEmpty} onChange={(e) => {setName(e.target.value); setNameEmpty(e.target.value)}} />
                </div>
                <div className={s.form__inputWrapper}>
                    {phoneNumber == "" || errorNumber == true ? <span className={s.form__error}>{error}</span> : null}
                    <input className={errorNumber == true ? `${s.form__input} ${s.form__inputError}` : s.form__input} type="tel" placeholder="Номер телефону*" value={phoneNumber} maxLength={14} onChange={(e) => {handleNumber(e.target.value); setPhone(e.target.value)}} />
                </div>
                <div className={s.form__inputWrapper}>
                    {city == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Місто*" value={cityEmpty} onChange={(e) => {setCity(e.target.value); setCityEmpty(e.target.value)}} />
                </div>
                <div className={s.form__inputWrapper}>
                    {department == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="number" min={1} placeholder="Номер відділення нової пошти*" value={departmentEmpty} onChange={(e) => {setDepartment(e.target.value); setDepartmentEmpty(e.target.value)}} />
                </div>
                <div className={s.form__buttons}>
                    <button disabled={!formValid} className={formValid ? `${s.form__buttons_submit} ${s.form__buttons_submitActive}` : s.form__buttons_submit} onClick={onSubmit}>Оформити покупку</button>
                    <Link className={s.form__buttons_link} href="/catalog">Продовжити покупки</Link>
                </div>
            </form>
        </>
    )
}

export default DeliveryForm