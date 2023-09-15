import React from 'react'
// import styles 
import s from './Footer.module.scss'
// import components
import Container from '../container'
import FooterLogo from './logo'
import Location from './location'
import FooterNav from './nav'
import Contacts from './contacts'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <Container>
                    <div className={s.footer__body}>
                        <FooterLogo key="logo" />
                        <Location key="location" />
                        <FooterNav key="nav" />
                        <Contacts key="contacts" />
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;