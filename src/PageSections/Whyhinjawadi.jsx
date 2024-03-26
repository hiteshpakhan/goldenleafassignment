import React from 'react'

const Whyhinjawadi = () => {
  return (
    <div id='whyhinjawadi' className='whyhinjawadih bg-auto bg-no-repeat bg-center w-screen  flex flex-col justify-center items-center'   >
      <div>Why Hinjawadi</div>
      <div>Hinjawadi: The Smart Investment Hub</div>
      <hr className=' w-1/2' />
      <div>Investing in a plot near Hinjawadi is more than a choice; it's a strategic move.</div>

    <div className='  lg:w-1/2 sm:w-2/3 flex flex-col justify-center items-center'>

          {/* daisy ui */}
          <div className="collapse collapse-arrow bg-white text-black m-3 rounded-md ">
            <input type="radio" name="my-accordion-2" defaultChecked /> 
            <div className="collapse-title text-xl font-medium">
            Strategic Location
            </div>
            <div className="collapse-content"> 
              <p>Hinjawadi, the coveted IT hub of Pune, is not just witnessing development; it's driving it. With Tech Mahindra a mere 10 minutes away from Sylvanscape, you're not just investing in a plot; you're investing in proximity to employment centers, ensuring a high ROI.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white text-black m-3  rounded-md">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Future-Ready Connectivity
            </div>
            <div className="collapse-content"> 
              <p>Sylvanscape is strategically located very near the upcoming ring road and Hinjawadi Metro Station. This ensures that your investment is future-ready, with easy access to key areas of Pune. The Hinjawadi boom is not just a trend; it's a sustained trajectory of growth.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white text-black m-3  rounded-md">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            High ROI Anticipation
            </div>
            <div className="collapse-content"> 
              <p>The Hinjawadi region is experiencing unprecedented growth. With limited plots available in the region, Sylvanscape offers a unique opportunity for high returns on investment. Investing in a plot here means aligning with progress and securing your place in one of Pune's most sought-after locations.</p>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Whyhinjawadi