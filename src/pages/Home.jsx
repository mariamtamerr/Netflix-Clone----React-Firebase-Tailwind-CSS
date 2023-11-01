import React, { useEffect, useState } from 'react'
import Top from '../components/Top'
import Rows from '../components/Rows'
import requests from '../requests'

const Home = () => {


  return (
    <>
      <Top/>
      <Rows title='Popular' fetchURL={requests.popular}/>
      <Rows title='Top Rated' fetchURL={requests.topRated}/>
      <Rows title='Upcoming' fetchURL={requests.upcoming}/>
    </>
  )
}

export default Home
