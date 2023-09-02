import React from 'react'
// import styles
import s from "./History.module.scss"
// import link
import Link from 'next/link'
// import components
import Container from '@/components/container';

const title = "Наша історія";
const text = "Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus amet proin enim porttitor arcu laoreet. Volutpat posuere eu blandit egestas faucibus. Sit lacinia feugiat maecenas tincidunt aliquet. Sodales suscipit ac sollicitudin fermentum. Egestas quis sagittis augue egestas sit volutpat at diam.";

const HistoryHome = () => {
    return (
        <>
            <div className={s.history}>
                <Container key="container">
                    <h4 className={s.history__title}>{title}</h4>
                    <p className={s.history__text}>{text}</p>
                    <Link className={s.history__link} href="/history">Дізнатися  більше</Link>
                </Container>
            </div>
        </>
    )
}

export default HistoryHome