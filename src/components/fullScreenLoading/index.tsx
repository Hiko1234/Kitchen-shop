import React from 'react'
// import styles
import s from "./FullScreenLoading.module.scss"

const FullScreenLoading = ({ onLoading }: any) => {
    return (
        <>
            <div className={ onLoading == true ? `${s.loadingWrapper} ${s.loadingWrapperActive}` : s.loadingWrapper}>
                <div className={s.loading}>
                    <div className={s.loading__circle}></div>
                </div>
            </div>
        </>
    )
}

export default FullScreenLoading