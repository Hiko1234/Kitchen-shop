"use client"

import React, { useState, useEffect, useMemo } from 'react'
// import styles
import s from "./Pagination.module.scss"
// import img
import Image from 'next/image';
import icon from "./arrow.png"

const Pagination = (props: any) => {
    const { itemsPerPage, totalItems, paginate } = props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [actualPages, setActualPages] = useState<number[]>([]);

    const pageNumbers = useMemo(() => {
        const numbers = [];
        for (let i = 1; i <= totalPages; i++) {
            numbers.push(i);
        }
        return numbers;
    }, [totalPages]);

    useEffect(() => {
        if (pageNumbers.length <= 7) {
            setActualPages(pageNumbers);
        } else {
            if (currentPage == 1 || currentPage == 2 || currentPage == 3) {
                const pages = pageNumbers.slice(0, 7);
                setActualPages(pages);
            } else {
                const pages = pageNumbers.slice(currentPage - 4, currentPage + 3);
                setActualPages(pages);
            }
        }
    }, [currentPage, pageNumbers]);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalPages]);

    return (
        <>
            {totalItems != 0 ? (
                <ul className={s.pagination}>
                    <li className={currentPage == 1 ? `${s.pagination__prev} ${s.pagination__prevDisActive}` : s.pagination__prev} onClick={() => {
                        setCurrentPage((prev: number) => prev - 1);
                        paginate(currentPage - 1);
                    }}><Image className={s.pagination__prev_img} src={icon} alt="Pagination prev" width={10} height={6} /></li>
                    {actualPages.map((number) => (
                        <li className={currentPage == number ? `${s.pagination__page} ${s.pagination__pageActive}` : s.pagination__page} key={number} onClick={() => {
                            paginate(number);
                            setCurrentPage(number);
                        }}>{number}</li>
                    ))}
                    <li className={currentPage == pageNumbers.length ? `${s.pagination__next} ${s.pagination__nextDisActive}` : s.pagination__next} onClick={() => {
                        setCurrentPage((prev: number) => prev + 1);
                        paginate(currentPage + 1);
                    }}><Image className={s.pagination__next_img} src={icon} alt="Pagination next" width={10} height={6} /></li>
                </ul>
            ) : null}
        </>
    )
}

export default Pagination