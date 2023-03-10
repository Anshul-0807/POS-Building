import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <aside>
          <div>LOGO</div>
          <ul>
            <li><Link to='/tables'>Tables</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
          </ul>
        </aside>
        <main> <Outlet/></main>
    </div> 
  )
}

export default MainLayout