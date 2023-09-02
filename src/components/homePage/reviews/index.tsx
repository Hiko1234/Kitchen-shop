"use client"

import React, { useState } from 'react'
// import styles
import s from "./Reviews.module.scss"
// import components
import Container from '@/components/container'
import CardReviews from '@/components/cards/reviews'
// import pagination
import Pagination from '@/components/pagination';

const data = [
    { id: 1, date: "10 вересня 2023", name: "Анастасія", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 2, date: "10 вересня 2023", name: "Анастасія", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 3, date: "10 вересня 2023", name: "Анастасія", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 4, date: "10 вересня 2023", name: "Петро", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 5, date: "10 вересня 2023", name: "Петро", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 6, date: "10 вересня 2023", name: "Анастасія", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 7, date: "10 вересня 2023", name: "Петро", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
    { id: 8, date: "10 вересня 2023", name: "Анастасія", reviews: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel." },
]

const Reviews = () => {
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItem = data.slice(firstItemIndex, lastItemIndex);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <Container key="container">
                <h4 className={s.reviewsTitle}>Відгуки</h4>
                <div className={s.reviews}>
                    {currentItem.map((info) => (
                        <CardReviews key={info.id} data={info} />
                    ))}
                </div>
                <Pagination key="pagination" itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} />
            </Container>
        </>
    )
}

export default Reviews