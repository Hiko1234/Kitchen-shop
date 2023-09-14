import React from 'react'
// import styles
import s from './page.module.scss'
// import link
import Link from 'next/link'
// import components
import Container from '@/components/container'

const NotFound = () => {
    return (
        <main className={s.notFound}>
            <Container key="container">
                <h1 className={s.notFound__title}>Виникла проблема</h1>
                <p className={s.notFound__text}>Ми не змогли знайти сторінку, яку ви шукали.</p>
                <p className={s.notFound__text}>Повернутися до <Link className={s.notFound__link} href="/">домашньої сторінки</Link></p>
            </Container>
        </main>
    )
}

export default NotFound