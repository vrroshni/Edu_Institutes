import React, { useEffect, useState } from 'react'
import SideBar from '../elements/SideBar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { institutesList } from "../../redux/slices/institute";
import Loader from '../elements/Loader'
import Institutetable from './tables/Institutetable'




const StudentsHome = () => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { authtokens } = useSelector((state) => state.auth)
  const { institutes } = useSelector((state) => state.institute)


  const fetchList = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authtokens?.access}`
      }
    }
    const { data } = await axios.get('institutes/list', config)
    dispatch(institutesList(data))
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    fetchList()
  }, [])


  return (
    <>
      {loading ?
        <div className='bg-white/10 col-span-9 rounded-lg p-6 text-center text-2xl font-bold text-white'>
          <Loader />
        </div> :
        institutes.length !== 0 ? <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
          <div id="last-users">
            <h1 className="font-bold py-4 uppercase">Educational Institutes</h1>
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-black/60">
                  <th className="text-left py-3 px-2 rounded-l-lg">Institute</th>
                  <th className="text-left py-3 px-2">Email</th>
                  <th className="text-left py-3 px-2">Location</th>
                  <th className="text-left py-3 px-2 rounded-r-lg">View</th>
                </thead>
                {institutes.map((institute) => (
                  <Institutetable data={institute} />
                ))}

              </table>
            </div>
          </div>
        </div> : <h1 className='bg-white/10 col-span-9 rounded-lg p-6 text-center text-2xl font-bold text-white'>No Institutes Available</h1>

      }
    </>
  )
}

export default StudentsHome