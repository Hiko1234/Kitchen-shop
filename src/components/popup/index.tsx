import React from 'react'
// import styles
import s from "./Popup.module.scss"

const Popup = (props: any) => {
    const { onClick, close } = props;

    return (
        <>
            <div className={s.popup}>
                <div className={s.popup__box}>
                    <p className={s.popup__box_text}>Ви впевнені?</p>
                    <div className={s.popup__box_buttons}>
                        <button className={s.popup__box_btnTrue} onClick={onClick}>Так</button>
                        <button className={s.popup__box_closeBtn} onClick={close}>Ні</button>
                    </div>
                </div>
                <div className={s.popup__bg} onClick={close}></div>
            </div>
        </>
    )
}

export default Popup