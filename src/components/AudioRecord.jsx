import React from 'react'
import microphone from '../assets/microphone.png'
const AudioRecord = () => {
  return (
      <div className='w-100 text-center my-5'>
          <h3>Record an Audio</h3>
          <img src={microphone} className='my-3'/>
    </div>
  )
}

export default AudioRecord