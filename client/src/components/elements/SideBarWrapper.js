import React,{Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
import SideBar from './SideBar'


const SideBarWrapper = () => {
  return (
    <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-slate-300 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <SideBar />
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </div>
        </div>
  )
}

export default SideBarWrapper