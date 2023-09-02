import React from 'react'
// import styles
import s from "./Tabs.module.scss"
// import scroll link
import { Link } from 'react-scroll';

const tabs = [
    { to: "characteristic", text: "Всі характеристики", key: "characteristic" },
    { to: "description", text: "Опис", key: "description" },
    { to: "reviews", text: "Відгуки", key: "reviews" },
]

const ScrollTabs = (props: any) => {
    const { selected, data } = props;

    return (
        <>
            <div className={s.tabs}>
                {tabs.map((tab) => (
                    <Link className={data == tab.key ? `${s.tabs__tab} ${s.tabs__tabActive}` : s.tabs__tab} key={tab.key} to={tab.to} smooth={true} duration={300} onClick={()=>selected(tab.key)}>{tab.text}</Link>
                ))}
                <Link className={data == "popular" ? `${s.tabs__lastTab} ${s.tabs__tabActive}` : s.tabs__lastTab} to="popular" smooth={true} duration={300} key="popular" onClick={()=>selected("popular")}>Популярні товари</Link>
            </div>
        </>
    )
}

export default ScrollTabs