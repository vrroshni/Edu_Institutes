import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit_institute_info } from "../../../redux/slices/institute";
import axios from 'axios';



function EditInstitutionProfile(props) {
    const { authtokens, user } = useSelector((state) => state.auth)
    const { instituteprofileinfo } = useSelector((state) => state.institute)
    
    const dispatch = useDispatch()

console.log(instituteprofileinfo,user,'infooo')
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails({
            ...details,
            [name]: value
        });
    }

    const VideohandleChange = (e) => {
        const { name } = e.target;
        setDetails({
            ...details,
            [name]: e.target.files[0]
        });

    }



    const submitHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${authtokens?.access}`
            }
        }
        const { data } = await axios.patch('institutes/editinfo/', { "location":details?.location, "description":details?.description, "website":details?.website, "institute": user?.user_id, "about_video":details?.about_video }, config)
        dispatch(edit_institute_info(data))
        props.handleModalClose()

    }
    const [details, setDetails] = useState({
        institute: user?.user_id,
        location: instituteprofileinfo?.location,
        description: instituteprofileinfo?.description ,
        website: instituteprofileinfo?.website ,
        about_video:'',
    });


    return (
        <>

            <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto '>
                <main id="content" role="main" class="modal fade fixed w-full max-w-md mx-auto p-6 top-0 " tabindex="-1">

                    <div class="mt-7 bg-white modal-dialog-scrollable  rounded-xl shadow-lg modal-dialog modal-dialog-centered relative w-auto  ">
                        <div class="p-4 sm:p-7">
                            <div class="text-center">
                                <h1 class="block text-2xl font-bold text-black ">Edit Details</h1>
                            </div>

                            <div class="mt-5">
                                <form onSubmit={submitHandler} >
                                    <div class="grid gap-y-4 text-black">
                                        <div>
                                            <label for="location" class="block text-sm font-bold ml-1">Location</label>
                                            <div class="relative mb-2 ">
                                                <input type="text" name="location" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" value={details?.location} onChange={handleChange}
                                                    required />
                                            </div>
                                            <label for="description" class="block text-sm font-bold ml-1">Tell us more about you</label>
                                            <div class="relative mb-2">
                                                <input type="text" name="description" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" value={details?.description} onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <label for="website" class="block text-sm font-bold ml-1">Your Website</label>
                                            <div class="relative mb-2">
                                                <input type="text" name="website" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" value={details?.website} onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <label for="about_video" class="block text-sm font-bold ml-1">Preview Video</label>
                                            {/* {details?.about_video != '' && <div className=" block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
                                                <video controls
                                                    alt="Preview"
                                                    className='w-full h-32 mb-3 rounded'

                                                ><source src={URL.createObjectURL(details?.about_video)} /></video>

                                            </div>} */}
                                            <div class="relative mb-2">
                                                <input type="file" name="about_video" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" onChange={VideohandleChange} />
                                            </div>
                                        </div>
                                        <button type="button"
                                            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                            onClick={() => props.handleModalClose()}>
                                            Close
                                        </button>
                                        <button type="submit"
                                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                            Save changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    )
}

export default EditInstitutionProfile