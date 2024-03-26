import React from 'react'
import telepresenceroom from "../assets/Amenities Icon/final/Telepresence Room.png";
import Cloubhouse from "../assets/Amenities Icon/final/Cloubhouse.png";
import CCTV from "../assets/Amenities Icon/final/CCTV.png";
import GrandEntrance from "../assets/Amenities Icon/final/Grand Entrance.png";

import SewageTreatment from "../assets/Amenities Icon/final/Sewage Treatment.png";
import WaterTank from "../assets/Amenities Icon/final/Water Tank.png";
import RainwaterHarvesting from "../assets/Amenities Icon/final/Rainwater.png";
import Endtoendassistance from "../assets/Amenities Icon/final/End to End Assistance.png";

import Campingzone from "../assets/Amenities Icon/final/Camping Zone.png";
import MeticulouslyPlannedGardening from "../assets/Amenities Icon/final/Meticulously plammed gardening.png";
import ElectricityConnection from "../assets/Amenities Icon/final/Electricity Connection.png";
import StreetLighting from "../assets/Amenities Icon/final/Street Lighting.png";


const Amenities = () => {
  return (

    <div id='amenitiesh' className='amenitiesh pb-20 text-white'>
      {/* title */}
      <div className=' pt-16 w-full flex flex-col items-center'>
        <div>AMENITIES</div>
        <div className=' text-4xl underline '>A Symphony of Opulence</div>
        <div className='flex flex-col items-center'>
          <p className=' pt-6'>Explore a realm of unmatched luxury at Sylvanscape, where an array of carefully curated amenities</p>
          <p>awaits to redefine your lifestyle.</p>
        </div>
      </div>

    {/* page content */}
      <div className=' pt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 '>
          
          {/* 1 */}
          <div className='flex justify-center items-center'>
            <div className=' flex flex-col justify-center items-center' >
              <div className=' w-2/3 pb-3'>
                <img src={telepresenceroom} alt="telepresence room" />
              </div>
              <hr className='  w-6/12  h-0.5 bg-white'  />
              <p className='p-2 text-sm w-full text-center '>Telepresence Room</p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={Cloubhouse} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>State-of-the-Art Clubhouse</p>
          </div>
          </div>
          {/* 3 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={CCTV} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>24/7 Surveillance</p>
          </div>
          </div>
          {/* 4 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={GrandEntrance} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Grand Entrance</p>
          </div>
          </div>
        
          {/* 1 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={Campingzone} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Camping zone</p>
          </div>
          </div>
          {/* 2 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={SewageTreatment} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Sewage Treatment</p>
          </div>
          </div>
          {/* 3 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={WaterTank} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Water Tank</p>
          </div>
          </div>
          {/* 4 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={RainwaterHarvesting} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Rainwater Harvesting</p>
          </div>
          </div>
       
          {/* 1 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={Endtoendassistance} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>End-to-end assistance</p>
          </div>
          </div>
          {/* 2 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={MeticulouslyPlannedGardening} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Meticulously Planned Gardening</p>
          </div>
          </div>
          {/* 3 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={ElectricityConnection} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Electricity Connection</p>
          </div>
          </div>
          {/* 4 */}
          <div className='flex justify-center items-center'>

          <div className='  flex flex-col justify-center items-center ' >
            <div className=' w-2/3 pb-3'>
              <img src={StreetLighting} alt="" />
            </div>
            <hr className='  w-6/12  h-0.5 bg-white'  />
            <p className='p-2 text-sm w-full text-center '>Street Lighting</p>
          </div>
          </div>


      </div>
    </div>
  )
}

export default Amenities