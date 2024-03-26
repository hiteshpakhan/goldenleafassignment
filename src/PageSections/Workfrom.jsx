import React from 'react'
import WorkFromForestImage from "../assets/Work From Forest Image.png"

const Workfrom = () => {
  return (
    <div id='workfrom' className='workfromh  relative '>
      
      <img src={WorkFromForestImage} alt='Work from forest' className='h-100vh bg-center h-1/2 relative -z-10  bg-cover bg-no-repeat' />

      <div className='absolute top-0 left-0 z-20 mt-20 w-full'>
        <div className=' text-center'>
          <p className='mt-3'>Work from forest</p>
          <p className='mt-3'>Transform Your</p>
          <p className='mt-3'>Work Environment</p>
        </div>
        <div className=' w-1/2 ml-20 mt-12'>
          <p>Why settle for a traditional office when you can work in the <br/>tranquility of nature?</p>
          <p>Experience the future of remote work. Sylvanscape <br/>presents "Work From Forest" (WFF) - where your office is a <br/>glass pod nestled in the woods, providing a 360-degree <br/>immersive view.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Workfrom