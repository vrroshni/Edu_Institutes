import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { profile } from "../../redux/services/profile";



const SideBar = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const { authtokens,user } = useSelector((state) => state.auth)
    const { profileinfo } = useSelector((state) => state.profile)

    useEffect(() => {
        const token = authtokens?.access
        if(!profileinfo)
        dispatch(profile({ token }))

    }, [])

    return (
        <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">Dashboard<span className="text-indigo-400">.</span></h1>
            <p className="text-slate-400 text-sm mb-2">Welcome,</p>
            <a onClick={() => Navigate('/profile')} className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-black/100 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <img className="rounded-full w-10 h-10 relative object-cover" src={profileinfo?.pro_pic ? (profileinfo?.pro_pic) : "https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"} alt="" />
                </div>
                <div>
                    <p className="font-medium group-hover:text-indigo-400 leading-4">{profileinfo?.full_name}</p>
                    <span className="text-xs text-slate-400">@{profileinfo?.username}</span>
                </div>
            </a>
            <hr className="my-2 border-slate-700" />
            <div onClick={() => Navigate('/')} id="menu" className="flex flex-col space-y-2 my-5">
                <a  className="hover:bg-black/100 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Home</p>
                            <p className="text-slate-400 text-sm hidden md:block">Home Page</p>
                        </div>

                    </div>
                </a>
            </div>
            {profileinfo?.is_institute &&
                <div onClick={() => Navigate('/details')} id="menu" className="flex flex-col space-y-2 my-5">
                    <a className="hover:bg-black/100 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </div>
                            <div >
                                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Institute</p>
                                <p className="text-slate-400 text-sm hidden md:block">Institute Details</p>
                            </div>

                        </div>
                    </a>
                </div>}
        </div>

    )
}

export default SideBar