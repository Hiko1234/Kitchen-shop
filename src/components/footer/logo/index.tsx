import React from 'react'
// import styles
import s from "./Logo.module.scss"
// import link
import Link from 'next/link'

const FooterLogo = () => {
    return (
        <>
            <Link href="/" className={s.logo}>
                LOGO
            </Link>
        </>
    )
}

export default FooterLogo