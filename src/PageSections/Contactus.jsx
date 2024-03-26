import React from 'react'

const Contactus = () => {
  return (
    <div id='contactus' className='contactush text-white flex flex-col  items-center'>
      {/* title */}
      <div className='flex flex-col justify-center items-center text-xl mt-12 '>
        <p>contact us</p>
        <p>Reach Out to Us</p>
        <hr />
      </div>
      {/* description */}
      <div className='flex flex-col justify-center items-center mt-9'>
        <p className=' text-center mt-3'>Feel free to get in touch with us at Sylvanscape.</p>
        <p className=' text-center mt-3'>Whether you have questions, want to schedule a site visit, or need more information, our dedicated <br/>team is here to assist you. Your dream home journey begins with a simple call, </p>
        <p className='mt-3'>reach us at +918554982203</p>
      </div>

      {/* form  */}
      <form className=' mt-16 flex  flex-col items-center ' >
        <div className=' flex flex-row  justify-center items-center w-full'>
          <input type="text" placeholder="Type here" className=" input input-bordered w-full m-3 ml-0  bg-white text-black" />
          <input type="text" placeholder="Type here" className=" input input-bordered w-full m-3 mr-0 bg-white text-black" />
          
        </div>
        <input type="text" placeholder="Type here" className=" input input-bordered w-full m-3 p-3 bg-white text-black" />
        <div className='flex flex-row '>
        <input type="checkbox" defaultChecked className="checkbox m-3" />
        <p className='m-3'>I would like to receive the latest property updates & promotions</p>
        </div>
        <button className="btn btn-warning text-white text-center">Warning</button>
      </form>
    </div>
  )
}

export default Contactus