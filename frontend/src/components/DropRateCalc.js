import React, { useState, useEffect } from 'react'

import { Row, Col, Container } from 'react-bootstrap'

const DropRateCalc = () => {
  const [status, setStatus] = useState('Click at any drop')
  const [rate, setRate] = useState(0)
  const [drops, setDrops] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const countHandler = () => {
    if (drops < 2) {
      setStatus('Click again untill 3 drops')
      setInterval(() => {
        setSeconds((seconds) => seconds + 0.1)
      }, 100)
      setDrops(drops + 1)
    } else {
      setInterval(() => {
        setSeconds(seconds)
      })
      setDrops(3)
      setRate((3 * 540) / seconds)
      setStatus('The rate(ml/hr) is')
    }
  }
  const countReset = () => {
    setStatus('Click at any drop')
    setRate(0)
    setDrops(0)
    setSeconds(0)
  }

  return (
    <>
      <Container>
        <Col className='text-center py-3'>
          <Row>
            <Col>
              <h1>{drops} drops are recorded</h1>
            </Col>
          </Row>
        </Col>

        <Col className='text-center py-3'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={countHandler}
          >
            <h1>{status}</h1>
          </button>
        </Col>
        <Col className='text-center py-3'>
          <h1>{rate.toFixed(2)}</h1>
        </Col>
        <Col className='text-center py-3'>
          <button
            type='button'
            className='btn btn-success'
            onClick={countReset}
          >
            <h1>Refresh</h1>
          </button>
        </Col>
      </Container>
    </>
  )
}

export default DropRateCalc
