import React from 'react'
import herologo from "../assets/Logo/Sylvanscape Logo2.png";

const Home = () => {
  return (
    <div id='home' className='homeh relative -z-10  flex flex-row '>
      <div className='bgimg hidden sm:block w-1/2'>1</div>
      <div className='w-full sm:w-1/2 relative  flex justify-center items-center' >
        <div className='bgbook py-3 px-8 text-xl absolute top-0 right-0 sm:right-48 text-black '>book a side visit</div>
        <div className='flex flex-col justify-center items-center'>
          <p className=' text-5xl text-black'>Welcome to </p>
          
          <img src={herologo} alt='Sylvanscape Logo'  />

          <div className='flex flex-col justify-center items-center text-black'>
            <p>Your Ultimate Destination for Premium</p>
            <p>Plots in Pune!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home