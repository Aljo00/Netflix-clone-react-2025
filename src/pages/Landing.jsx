import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/landing/Hero'
import Trending from '../components/landing/Trending'
import Plans from '../components/landing/Plans'
import Reason from '../components/landing/Reason'
import Questions from '../components/landing/Questions'
import Footer from '../components/Footer'
import BeforFotter from '../components/landing/BeforFotter'


const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='px-14 lg:px-36 '>
        <Trending />
        <Plans />
        <Reason />
        <Questions />
        <BeforFotter />
        <Footer />
        </div>
        

    </div>
  )
}

export default Landing