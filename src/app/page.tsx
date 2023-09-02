'use client';

// import styles
import s from './page.module.scss'
// import components
import Hero from '@/components/hero';
import Suppliers from '@/components/suppliers';
import HistoryHome from '@/components/homePage/history';
import Questions from '@/components/questions';
import HomePageProducts from '@/components/homePage/homePageProducts';
import SearchInput from '@/components/homePage/search';
import Reviews from '@/components/homePage/reviews';

export default function Home() {
  
  return (
    <main className={s.home}>
      <Hero key="hero" />
      <SearchInput key="search" />
      <HomePageProducts key="products" />
      <Suppliers key="suppliers" />
      <HistoryHome key="history" />
      <Questions key="questions" />
      <Reviews />
    </main>
  )
}