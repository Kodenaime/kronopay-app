import React from 'react'

import Faqs from '../components/Faqs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Test from '../components/Test.jsx'
import Benefits from '../components/Benefits.jsx'
import Cases from '../components/Cases.jsx'

const Home = () => {
  return (
    <div>
      
      {/* <Test /> */}
      <Cases />
      <Benefits />
      <Testimonials />
      <Faqs />
    </div>
  )
}

export default Home