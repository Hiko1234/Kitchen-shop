"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Form.module.scss"
// import components
import FullScreenLoading from '@/components/fullScreenLoading'
import PopupHandle from '@/components/popupHandle'
// import utils
import { setValidateNumber } from '@/utils/setValidateNumber'
import { sendTelegram } from '@/utils/sendTelegram'

const FormQuestion = () => {
    // form error
    const [formValid, setFormValid] = useState<boolean>(false);
    const [error, setError] = useState<string>("*");
    // validate name
    const [name, setName] = useState<string>("");
    const [nameEmpty, setNameEmpty] = useState<string>("");
    // validate comment
    const [comment, setComment] = useState<string>("");
    const [commentEmpty, setCommentEmpty] = useState<string>("");
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
        if (name == "" || phoneNumber == "" || errorNumber == true || comment == "") {
            setFormValid(false)
        } else {
            setFormValid(true);
        }
    }, [name, phoneNumber, comment, errorNumber]);

    // loading
    const [loading, setLoading] = useState<boolean>(false);
    // popup
    const [popup, setPopup] = useState<boolean>(false);
    const popupTrue = {title: "Форма відправлена", text: "Дякуємо"};
    const [popupError, setPopupError] = useState<boolean>(false);
    const popupFalse = {title: "Виникла помилка", text: "Вибачте за незручності"};

    const onSubmit = async (e: any) => {
        e.preventDefault();
        // send message to telegram
        const chatID: string = "-4016770272";
        const upiAPI: string = `https://api.telegram.org/bot6637841024:AAEyyaFAm_WTUGj8lk43Q-tfaokq3GFILdA/`;

        try {
            // send message
            let message = `Замовлення дзвінку `
            message += `Ім'я: ${name}; `;
            message += `Номер телефону: ${phone} `;
            message += `Коментар: ${comment} `;

            await sendTelegram(message, upiAPI, chatID);

            setNameEmpty("");
            setCommentEmpty("");
            setPhoneNumber("");
            setLoading(true);
        } catch (e) {
            setPopupError(true)
            setTimeout(() => { setPopupError(false) }, 5000);
        } finally {
            setLoading(false);
            setPopup(true)
            setTimeout(() => { setPopup(false) }, 5000);
        }
    };

    return (
        <>
            <h4 className={s.formTitle}>Замовити дзвінок</h4>
            <form className={s.form}>
                <div className={s.form__inputWrapper}>
                    {name == "" ? <span className={s.form__error}>{error}</span> : null}
                    <input className={s.form__input} type="text" placeholder="Ім'я" value={nameEmpty} onChange={(e) => {setName(e.target.value); setNameEmpty(e.target.value)}} />
                </div>
                <div className={s.form__inputWrapper}>
                    {phoneNumber == "" || errorNumber == true ? <span className={s.form__error}>{error}</span> : null}
                    <input className={errorNumber == true ? `${s.form__input} ${s.form__inputError}` : s.form__input} type="tel" placeholder="Номер телефону" value={phoneNumber} maxLength={14} onChange={(e) => {handleNumber(e.target.value); setPhone(e.target.value)}} />
                </div>
                <div className={s.form__inputWrapper}>
                    {comment == "" ? <span className={s.form__error}>{error}</span> : null}
                    <textarea className={s.form__comment_textarea} placeholder="Коментар" value={commentEmpty} onChange={(e) => {setComment(e.target.value); setCommentEmpty(e.target.value)}}></textarea>
                </div>
                <button disabled={!formValid} className={formValid ? `${s.form__btn} ${s.form__btnActive}` : s.form__btn} onClick={onSubmit}>Отримати дзвінок</button>
            </form>
            <FullScreenLoading key="loading" onLoading={loading} />
            <PopupHandle key="popup-1" popup={popup} setPopup={setPopup} text={popupTrue} />
            <PopupHandle key="popup-2" popup={popupError} setPopup={setPopupError} text={popupFalse} />
        </>
    )
}

export default FormQuestion