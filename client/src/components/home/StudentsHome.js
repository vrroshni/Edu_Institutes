import React, { useEffect } from 'react'
import SideBar from '../elements/SideBar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getprofile } from '../../redux/services/profile'



const StudentsHome = () => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()

  

  return (

    <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-slate-300 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <SideBar />
        <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
          <div id="last-users">
            <h1 className="font-bold py-4 uppercase">Educational Institutes</h1>
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-black/60">
                  <th className="text-left py-3 px-2 rounded-l-lg">Institute</th>
                  <th className="text-left py-3 px-2">Email</th>
                  <th className="text-left py-3 px-2 rounded-r-lg">View</th>
                </thead>
                <tr className="border-b border-gray-700 bg-black/25 hover:bg-black/100 transition duration-300  ease-linear rounded-lg">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                      <span>Thai Mei</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">thai.mei@abc.com</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center space-x-3">
                      <a href="" title="Edit" className="hover:text-white">
                        <button >View More Details</button>
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentsHome