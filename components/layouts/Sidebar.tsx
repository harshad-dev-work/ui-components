import React from 'react'

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void } ) => {
  return (
    <div className='lg:basis-64'>
      <button onClick={toggleSidebar}>hamburger</button>
    </div>
  )
}

export default Sidebar
