import React from 'react'
// import styles
import s from "./History.module.scss"
// import components
import Container from '@/components/container'

export default function History(){
  return (
    <>
      <main className={s.history}>
        <Container key="container">
          <div className={s.history__firstItem}>
            <h1 className={s.history__firstItem_title}>Наша історія</h1>
            <p className={s.history__firstItem_subtext}>Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus amet proin enim porttitor arcu laoreet. Volutpat posuere eu blandit egestas faucibus. Sit lacinia feugiat maecenas tincidunt aliquet. Sodales suscipit ac sollicitudin fermentum. Egestas quis sagittis augue egestas sit volutpat at diam.</p>
          </div>
          <div className={s.history__secondItem}>
            <h1 className={s.history__secondItem_title}>Lorem ipsum dolor</h1>
            <div className={s.history__secondItem_items}>
              <p className={s.history__secondItem_item}>Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar gravida odio faucibus feugiat elementum. Nullam nunc blandit purus leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at. Risus fermentum bibendum convallis nec. Nec fermentum faucibus risus diam nisi at lacus vitae ultricies. Sodales phasellus blandit posuere senectus interdum. Massa nunc tellus cras egestas sem risus. Ut semper at nunc egestas.</p>
              <p className={s.history__secondItem_item}>Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar gravida odio faucibus feugiat elementum. Nullam nunc blandit purus leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at. Risus fermentum bibendum convallis nec. Nec fermentum faucibus risus diam nisi at lacus vitae ultricies. Sodales phasellus blandit posuere senectus interdum. Massa nunc tellus cras egestas sem risus. Ut semper at nunc egestas.</p>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}