import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Institutetable = ({ data }) => {
    const Navigate = useNavigate()
    return (
        <tr className="border-b border-gray-700 bg-black/25 hover:bg-black/100 transition duration-300  ease-linear rounded-lg">
            <td className="py-3 px-2 font-bold">
                <div className="inline-flex space-x-3 items-center">
                    <Link className='inline-flex space-x-3 items-center' to={'/description'} state={{ institute: data }}>
                        <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                        <span>  {data?.institute?.full_name}</span>
                    </Link>
                </div>
            </td>
            <td className="py-3 px-2 text-sm">{data?.institute?.email}
            </td>
            <td className="py-3 px-2">{data?.location}
            </td>
            <td className="py-3 px-2">
                <div className="inline-flex items-center space-x-3">
                    <Link to={'/description'} state={{ institute: data }} class=" text-xs relative inline-flex items-center justify-center  mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            View
                        </span>
                    </Link>
                </div>
            </td>
        </tr>

    )
}

export default Institutetable