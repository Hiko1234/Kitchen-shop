import React from 'react'
// import styles
import s from "./Contacts.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from 'next/image'
import icon1 from "../../../assets/images/footer/mail.png"
import icon2 from "../../../assets/images/footer/phoneNumber.png"
import icon3 from "../../../assets/images/footer/facebook.png"
import icon4 from "../../../assets/images/footer/telegram.png"
import icon5 from "../../../assets/images/footer/instagram.png"

const contacts = [
    { icon: icon1, text: "logo@figma.com", type: "email" },
    { icon: icon2, text: "+3800065628", type: "number" },
];

const socials = [
    { icon: icon3, path: "/", text: "facebook" },
    { icon: icon4, path: "/", text: "telegram" },
    { icon: icon5, path: "/", text: "instagram" },
]

const Contacts = () => {
    return (
        <>
            <div className={s.contacts}>
                <h6 className={s.contacts__title}>Contact Us</h6>
                {contacts.map((contact) => (
                    <Link className={s.contacts__contact} href={contact.type == "email" ? `mailto: ${contact.text}` : `tel: ${contact.text}`}>
                        <div className={s.contacts__contact_wrapper}>
                            <Image className={s.contacts__contact_img} src={contact.icon} alt={contact.text} width={24} height={24} />
                            <p>{contact.text}</p>
                        </div>
                    </Link>
                ))}
                <h6 className={s.contacts__title}>Follow us</h6>
                <div className={s.contacts__social}>
                    {socials.map((social) => (
                        <Link className={s.contacts__social_link} href={social.path} key={social.text}>
                            <div className={s.contacts__social_wrapper}>
                                <Image className={s.contacts__social_img} src={social.icon} alt={social.text} width={16} height={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contacts