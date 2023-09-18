import React from 'react'
// import styles
import s from "./Popup.module.scss"

const PopupHandle = ({ popup, setPopup, text }: any) => {
    return (
        <>
            <div className={popup == true ? `${s.popup} ${s.popupActive}` : s.popup}>
                <h4 className={s.popup__title}>{text.title}</h4>
                <p className={s.popup__text}>{text.text}</p>
                <div className={s.popup__btnWrapper}>
                    <button className={s.popup__btn} onClick={()=>{setPopup(false)}}></button>
                </div>
            </div>
        </>
    )
}

export default PopupHandle