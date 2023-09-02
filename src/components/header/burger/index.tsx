import React, { useState } from 'react'
// import styles
import s from "./Burger.module.scss"
// import link
import Link from 'next/link';

const links = [
    { text: 'Каталог', path: '/catalog' },
    { text: 'Про нас', path: '/history' },
    { text: 'FAQ', path: '/' },
    { text: 'Контакти', path: '/' },
];

// phone number
const number = "000-000-000";

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState<any>([]);
    // function open burger
    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { left: "0" }
            })
        }
    }

    return (
        <>
            {isOpen ?
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burgerClose}>
                        <span></span>
                    </div>
                </button> :
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burger__icons}>
                        <span></span>
                    </div>
                </button>
            }
            <div className={s.burgerMenu} style={hideOrShow}>
                <ul className={s.burgerMenuList}>
                    {links.map((link) => (
                        <li className={s.burgerMenuList__li} key={link.text}><Link className={s.burgerMenuList__li_link} href={link.path} onClick={() => {
                            setIsOpen(false);
                            setHideOrShow(() => {
                                return { left: "-100%" }
                            })
                        }}>{link.text}</Link></li>
                    ))}
                    <li className={s.burgerMenuList__li}><Link className={s.burgerMenuList__li_button} href={`tel: ${number}`}>Телефонувати</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Burger