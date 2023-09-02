import React from 'react'
// import styles
import s from "./Reviews.module.scss"

const CardReviews = (props: any) => {
    const { data } = props;

  return (
    <>
        <div className={s.card}>
            <h4 className={s.card__date}>{data.date}</h4>
            <h2 className={s.card__name}>{data.name}</h2>
            <p className={s.card__reviews}>{data.reviews.length > 140 ? data.reviews.slice(0, 140) + "..." : data.reviews}</p>
        </div>
    </>
  )
}

export default CardReviews