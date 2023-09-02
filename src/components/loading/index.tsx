import React from 'react'
// import styles
import s from "./Loading.module.scss"

const Loading = () => {
  return (
    <div className={s.loading}>
        <div className={s.loading__circle}></div>
    </div>
  )
}

export default Loading