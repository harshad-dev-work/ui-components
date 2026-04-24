import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void } ) => {
  return (
    <div className='lg:basis-64'>
      <button onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
    </div>
  )
}

export default Sidebar
