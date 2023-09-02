"use client"

import React, { useState } from 'react'
// import styles
import s from "./Questions.module.scss"
// import components
import ItemQuestion from './itemQuestion'

const questions = [
  { id: 1, question: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", answer: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Diam rhoncus sed scelerisque sed auctor amet lobortis eget nulla." },
  { id: 2, question: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", answer: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Diam rhoncus sed scelerisque sed auctor amet lobortis eget nulla." },
  { id: 3, question: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", answer: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Diam rhoncus sed scelerisque sed auctor amet lobortis eget nulla." },
  { id: 4, question: "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?", answer: "Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue vel. Diam rhoncus sed scelerisque sed auctor amet lobortis eget nulla." },
]

const ItemsQuestion = () => {

  return (
    <>
      <div className={s.questions}>
        <h4 className={s.questions__title}>Часті запитання</h4>
        <ul className={s.questions__list}>
          {questions.map((question) => (
            <ItemQuestion key={question.id} data={question} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ItemsQuestion