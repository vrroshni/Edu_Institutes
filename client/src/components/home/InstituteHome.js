import React, { useEffect, useState } from 'react'
import SideBar from '../elements/SideBar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { institutesList } from "../../redux/slices/institute";
import Loader from '../elements/Loader'




const InstituteHome = () => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const { profileinfo } = useSelector((state) => state.profile)

  return (
    <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-slate-300 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <SideBar />
          <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
            <div id="last-users">
              <h1 className="font-bold py-4 uppercase">Hello {profileinfo?.full_name}</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default InstituteHome