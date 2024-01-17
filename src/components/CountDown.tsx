'use client'

import React from 'react'
import Countdown from 'react-countdown'

const edingDate = new Date('2024-02-25')

const CountDown = () => {
  return (
    
      <Countdown className='font-bold text-5xl text-yellow-300' date={edingDate} />
    
  )
}

export default CountDown
