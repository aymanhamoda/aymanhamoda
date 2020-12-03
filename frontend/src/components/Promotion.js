import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listPromotions } from '../actions/promotionActions'

const Promotion = () => {
  const dispatch = useDispatch()

  const promotionList = useSelector((state) => state.promotionList)
  const { error, loading, promotions } = promotionList

  useEffect(() => {
    dispatch(listPromotions())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {promotions.map((promotion) => (
        <Carousel.Item key={promotion._id}>
          <Image src={promotion.image} fluid />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Promotion
