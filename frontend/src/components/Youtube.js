import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { listYoutubes } from '../actions/youtubeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { LinkContainer } from 'react-router-bootstrap'

const Youtube = ({ youtube }) => {
  const dispatch = useDispatch()

  const youtubeList = useSelector((state) => state.youtubeList)
  const { error, loading, youtubes } = youtubeList

  useEffect(() => {
    dispatch(listYoutubes())
  }, [dispatch])

  const opts = {
    height: '200',
    width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1 id='youtubes'>Youtube</h1>
          <div className='row justify-content-around'>
            {youtubes.map((youtube) => (
              <div key={youtube._id}>
                <YouTube videoId={youtube.url} opts={opts} />
              </div>
            ))}
          </div>
          <a href='https://www.youtube.com/channel/UCX51EQqFhYolW3-Wqo1-VRQ/'>
            <h3 style={{ textAlign: 'right', color: 'white' }}>see more ..</h3>{' '}
          </a>
        </>
      )}
    </>
  )
}

export default Youtube
