import React from 'react'
import herologo from "../assets/Logo/Sylvanscape Logo2.png";

const Home = () => {
  return (
    <div id='home' className='homeh flex flex-row'>
      <div className='bgimg w-1/2'>1</div>
      <div className='w-1/2 relative  flex justify-center items-center' >
        <div className='bgbook py-3 px-8 text-xl absolute top-0 right-48 '>book a side visit</div>
        <div className='flex flex-col justify-center items-center'>
          <p className=' text-5xl'>Welcome to </p>
          
          <img src={herologo} alt='Sylvanscape Logo'  />

          <div className='flex flex-col justify-center items-center'>
            <p>Your Ultimate Destination for Premium</p>
            <p>Plots in Pune!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home