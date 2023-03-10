import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <aside>sidebar</aside>
        <main> <Outlet/></main>
    </div> 
  )
}

export default MainLayout