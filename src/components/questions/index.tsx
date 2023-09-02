import React from 'react'
// import styles
import s from "./Questions.module.scss"
// import components
import Container from '../container'
import ItemsQuestion from './itemsQuestions'
import FormQuestion from './form'

const Questions = () => {
  return (
    <>
        <div className={s.questions}>
          <Container key="container">
              <div className={s.questions__body}>
                <div className={s.questions__question}>
                  <ItemsQuestion key="question"/>
                </div>
                <div className={s.questions__form}>
                    <FormQuestion key="form" />
                </div>
              </div>
          </Container>
        </div>
    </>
  )
}

export default Questions