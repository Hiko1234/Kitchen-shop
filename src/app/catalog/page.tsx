"use client"

import React, { useCallback, useEffect, useState } from 'react'
// import styles
import s from "./Catalog.module.scss"
// import components
import Container from '@/components/container'
import Sort from '@/components/sort';
import ClearFilters from '@/components/buttons/clearFilters';
import FilterCheckbox from '@/components/filtersCheckbox';
import Product from '@/components/cards/product';
// import pagination
import Pagination from '@/components/pagination';
// import data
import productsList from "@/data/products/products.json";
// import img
import Image from 'next/image'
import icon from "../../assets/images/arrow.png"
// import slider for price filter
import Slider from "react-slider"

export default function Catalog (){
  const [products, setProducts] = useState(Object.values(productsList));

  const [priceOpen, setPriceOpen] = useState<boolean>(false);
  const [producersOpen, setProducersOpen] = useState<boolean>(false);
  const [colorsOpen, setColorsOpen] = useState<boolean>(false);

  // writing rule

  const writing = () => {
    if (products.length == 0) {
      return "товарів"
    } else if (products.length == 1) {
      return "товар"
    } else {
      return "товара"
    }
  }

  // sort products

  const sortFromFirstLetter = () => {
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setProducts(sorted);
  };

  const sortFromLastLetter = () => {
    const sorted = [...products].sort((a, b) => b.title.localeCompare(a.title));
    setProducts(sorted);
  };

  // get items filter

  const colors = ["Чорний", "Онікс", "Мигдаль", "Капучіно", "Білий", "Мідь", "Шампань", "Бежевий", "Сірий", "Блакитний", "Молочний", "Рожевий", "Жовтий", "Зелений", "Хром", "Графіт", "Сахара", "Бронзовий", "Антрацит", "Ваніль", "Сріблястий"]
  const producers = ["Franke", "Miele", "Bosch"];

  // price filter

  const MIN = 0;
  const MAX = 900000;
  const [priceValue, setPriceValue] = useState([MIN, MAX]);

  // checkbox filter

  const initFilter: any = {
    producer: [],
    color: []
  }

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (
    type: any,
    checked: any,
    item: any
  ) => {
    if (checked) {
      switch (type) {
        case "PRODUCER":
          setFilter({ ...filter, producer: [...filter.producer, item] })
          break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item] })
          break
        default:
      }
    } else {
      switch (type) {
        case "PRODUCER":
          const newProducer = filter.producer.filter((e: any) => e !== item);
          setFilter({ ...filter, producer: newProducer })
          break
        case "COLOR":
          const newColor = filter.color.filter((e: any) => e !== item);
          setFilter({ ...filter, color: newColor })
          break
        default:
      }
    }
  }

  const clearFilters = () => {
    setFilter(initFilter);
    setPriceValue([0, 900000]);
  };

  const updateProducts = useCallback(
    () => {
      let temp = Object.values(productsList);

      // checkbox filter
      if (filter.producer.length > 0) {
        temp = temp.filter((e) => filter.producer.includes(e.producer))
      }
      if (filter.color.length > 0) {
        temp = temp.filter((e) => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check != undefined
        })
      }
      // price filter
      if (priceValue[0] > 0) {
        temp = temp.filter((e) => e.price > priceValue[0])
      }
      if (priceValue[1] < 1000000) {
        temp = temp.filter((e) => e.price < priceValue[1])
      }
      setProducts(temp);
    }, [filter, priceValue, setProducts]
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = products.slice(firstItemIndex, lastItemIndex);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={s.catalog}>
        <Container key="container">
          <div className={s.catalog__body}>
            <div className={s.catalog__functional}>
              <h4 className={s.catalog__title}>Каталог</h4>
              <div className={s.catalog__productsLength}><span>{products.length}</span> <span>{writing()}</span></div>
              <Sort key="sort" sortFromFirstLetter={sortFromFirstLetter} sortFromLastLetter={sortFromLastLetter} />
              <ClearFilters key="clearFilters" clearFilters={clearFilters} />
            </div>
            <div className={s.catalog__products}>
              <div className={s.catalog__products_cardsWrapper}>
                <div className={s.catalog__products_cards}>
                  {products.length != 0 ? (
                    <>
                      {currentItem.map((product) => (
                        <Product key={product.id} product={product} />
                      ))}
                    </>
                  ) : <p className={s.catalog__products_cardsEmpty}>Продукти за фільтрами не знайдено</p>}
                </div>
                <Pagination key="pagination" itemsPerPage={itemsPerPage} totalItems={products.length} paginate={paginate} />
              </div>
              <div className={s.filters}>
                <div className={s.filtes__items}>
                  <div className={s.filters__item}>
                    <h4 className={s.filters__title} onClick={() => priceOpen == false ? setPriceOpen(true) : setPriceOpen(false)}><span>Ціна</span><Image className={priceOpen ? `${s.filters__title_img} ${s.filters__title_imgActive}` : s.filters__title_img} src={icon} alt="Arrow" width={18} height={10} /></h4>
                    <div className={priceOpen ? `${s.filters__checkboxes} ${s.filters__checkboxesActive}` : s.filters__checkboxes}>
                      <div className={s.filters__priceValues}>
                        <div className={s.filters__priceValue}>{priceValue[0]}</div>
                        <span>-</span>
                        <div className={s.filters__priceValue}>{priceValue[1]}</div>
                      </div>
                      <Slider className={s.filters__priceSlider} value={priceValue} min={MIN} max={MAX} onChange={setPriceValue} />
                    </div>
                  </div>
                  <div className={s.filters__item}>
                    <h4 className={s.filters__title} onClick={() => producersOpen == false ? setProducersOpen(true) : setProducersOpen(false)}><span>Марка</span><Image className={producersOpen ? `${s.filters__title_img} ${s.filters__title_imgActive}` : s.filters__title_img} src={icon} alt="Arrow" width={18} height={10} /></h4>
                    <div className={producersOpen ? `${s.filters__checkboxes} ${s.filters__checkboxesActive}` : s.filters__checkboxes}>
                      <form className={s.filters__checkboxes_form}>
                        {producers.map((item, index) => (
                          <FilterCheckbox item={item} key={index} filter={(input: any) => filterSelect("PRODUCER", input.checked, item)} checked={filter.producer.includes(item)} />
                        ))}
                      </form>
                    </div>
                  </div>
                  <div className={s.filters__item}>
                    <h4 className={s.filters__title} onClick={() => colorsOpen == false ? setColorsOpen(true) : setColorsOpen(false)}><span>Колір</span><Image className={colorsOpen ? `${s.filters__title_img} ${s.filters__title_imgActive}` : s.filters__title_img} src={icon} alt="Arrow" width={18} height={10} /></h4>
                    <div className={colorsOpen ? `${s.filters__checkboxes} ${s.filters__checkboxesActive}` : s.filters__checkboxes}>
                      <form className={s.filters__checkboxes_form}>
                        {colors.map((item, index) => (
                          <FilterCheckbox item={item} key={index} filter={(input: any) => filterSelect("COLOR", input.checked, item)} checked={filter.color.includes(item)} />
                        ))}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}