import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(false); 
    return (
        <>
            <div className={`fixed left-0 top-0 p-3 md:w-[50vw] h-full w-full bg-white z-50 ${activeNav ? "-translate-x-0" : "-translate-x-full"} transition-all duration-500`}>
                <RxCross1 className=' m-2 p-4 text-7xl cursor-pointer' onClick={()=>setActiveNav(!activeNav)}/>
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#whyhinjawadi">Why Hinjawadi</a></li>
                <li><a href="#communityof">Community of Elites & NRIs</a></li>
                <li><a href="#managedforest">Managed Forest Concept</a></li>
                <li><a href="#workfrom">Work From Forest</a></li>
                <li><a href="#amenitiesh">Amenities</a></li>
                <li><a href="#contactus">Contact US</a></li>
                </ul>
            </div>
            <IoMenuOutline onClick={()=>setActiveNav(!activeNav)} className='text-7xl fixed left-5 top-5 p-3 cursor-pointer' />
        </>
    )
}

export default Navbar