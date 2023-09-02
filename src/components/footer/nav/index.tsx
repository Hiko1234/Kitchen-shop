import React from 'react'
// import styles
import s from "./Nav.module.scss"
// import link
import Link from 'next/link'

const links = [
    { text: 'Каталог', path: '/catalog' },
    { text: 'Про нас', path: '/history' },
    { text: 'FAQ', path: '/' },
    { text: 'Контакти', path: '/' },
]

const FooterNav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                {links.map((link) => (
                    <li className={s.nav__list_li} key={link.text}>
                        <Link href={link.path} className={s.nav__list_link}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FooterNav