import React from 'react'
import Contactus from '../PageSections/Contactus'
import Home from '../PageSections/Home'
import Aboutus from '../PageSections/Aboutus'
import Whyhinjawadi from '../PageSections/Whyhinjawadi'
import Managedforest from '../PageSections/Managedforest'
import Workfrom from '../PageSections/Workfrom'
import Communityof from '../PageSections/Communityof'
import Amenities from '../PageSections/Amenities'

const LandingPage = () => {
  return (
    <div>
        <Home />
        <Aboutus />
        <Whyhinjawadi />
        <Communityof/>
        <Managedforest/>
        <Workfrom/>
        <Amenities/>
        <Contactus />
    </div>
  )
}

export default LandingPage