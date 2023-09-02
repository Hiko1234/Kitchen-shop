"use client"

import React, { useState, useRef } from 'react'
// import styles
import s from "./Filters.module.scss"

const FilterCheckbox = (props: any) => {
    const { item, filter, checked } = props;

    const inputRef = useRef(null);

    const onChange = () => {
        if (filter) {
            filter(inputRef.current);
        }
    };

    return (
        <>
            <label className={s.filters}><input
                className={s.filters__input}
                ref={inputRef}
                checked={checked}
                type="checkbox"
                onChange={onChange}
            />
                <span className={s.filters__checkbox}></span>
                <span>{item}</span>
            </label>
        </>
    )
}

export default FilterCheckbox