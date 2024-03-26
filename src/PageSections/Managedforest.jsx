import React from 'react'
import ManagedForestConceptFinalImage from "../assets/Managed Forest Concept Final Image.png";

const Managedforest = () => {
  return (
    <div id='managedforest' className='managedforesth relative -z-10'>

      <img src={ManagedForestConceptFinalImage} alt="Managed Forest Concept Final Image" className='rightimg' width={"500px"} />

      <div className='uppermaterial'>
        
        <div className=' p-8  flex flex-col'>
          <p >Managed Forest Concept</p>
          <p >A Green Haven with Thoughtful Design</p>
          <hr className=' w-80' />
        </div>
        
        <div className=' w-2/4 pl-6 pt-10 text-lg'>
          <p className='p-4'>
          Sylvanscape's path breaking Managed Forest Concept is a symphony of nature and design. With precision planning, we've created an environment where 2500+ trees coexist seamlessly with your living space.
          </p>
          <p className='p-4 pb-36'>
          Each tree is strategically placed to ensure that your home receives ample sunlight, fresh air, and unobstructed views of nature. The result is a living space where the beauty of the forest enhances your lifestyle, creating a serene and refreshing atmosphere every day.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Managedforest