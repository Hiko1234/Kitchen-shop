import React from 'react'
// import styles
import s from "./ClearFilters.module.scss"
// import img
import Image from 'next/image'
import icon from "../../../assets/images/dump.png"

const ClearFilters = (props: any) => {
  const { clearFilters } = props;

  return (
    <>
        <button className={s.clearFilters} onClick={clearFilters}>
            <span>Фільтрування</span>
            <Image className={s.clearFilters__img} src={icon} alt="ClearFilters" width={18} height={20} />
        </button>
    </>
  )
}

export default ClearFilters