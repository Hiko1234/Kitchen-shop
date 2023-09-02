import React from 'react'
// import styles
import s from "./Location.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from 'next/image'
import icon from "../../../assets/images/footer/icon.png"

const locations = [
    { id: 1, text1: "Wisconsin Ave, Suite 700", text2: "Chevy Chase, Maryland 20815", path: "/" },
    { id: 2, text1: "Wisconsin Ave, Suite 700", text2: "Chevy Chase, Maryland 20815", path: "/" },
    { id: 3, text1: "Wisconsin Ave, Suite 700", text2: "Chevy Chase, Maryland 20815", path: "/" },
]

const Location = () => {
    return (
        <>
            <div className={s.location}>
                <h6 className={s.location__title}>location</h6>
                <ul className={s.location__list}>
                    {locations.map((location) => (
                        <li className={s.location__list_li} key={location.id}>
                            <Link className={s.location__link} href={location.path}>
                                <div className={s.location__link_wrapper}>
                                    <Image className={s.location__link_img} src={icon} alt="Location" width={24} height={24} />
                                    <div className={s.location__link_text}>
                                        <p>{location.text1}</p>
                                        <p>{location.text2}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Location