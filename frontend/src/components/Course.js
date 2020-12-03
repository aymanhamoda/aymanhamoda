import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listCourses } from '../actions/courseActions'
import { LinkContainer } from 'react-router-bootstrap'

const Course = () => {
  const dispatch = useDispatch()

  const courseList = useSelector((state) => state.courseList)
  const { error, loading, courses } = courseList

  useEffect(() => {
    dispatch(listCourses())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1 id='courses'>Courses</h1>
      <div className='row'>
        {courses.map((course) => (
          <div className='col-lg-4'>
            <div className='bs-component'></div>
            <div
              className='card text-white bg-info mb-3'
              style={{ maxWidth: '20rem;' }}
              key={course._id}
            >
              <div className='card-header'>{course.title}</div>
              <div className='card-body'>
                <p className='card-text'>{course.description}</p>
                <a
                  className='btn btn-danger'
                  href={course.urlOffer}
                  varient='danger'
                  style={{ float: 'right' }}
                >
                  Get the offer
                </a>
              </div>
            </div>{' '}
          </div>
        ))}
      </div>
    </>
  )
}

export default Course
