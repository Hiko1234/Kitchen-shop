import React from 'react'
// import styles
import s from "./HeaderButton.module.scss"
// import link
import Link from 'next/link'

// phone number
const number = "000-000-000";

const HeaderButton = () => {
  return (
    <>
        <Link className={s.button} href={`tel: ${number}`}>Телефонувати</Link>
    </>
  )
}

export default HeaderButton