import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_institute_info } from "../../../redux/slices/institute";
import { useForm } from "react-hook-form";

import axios from 'axios';



function InstitutionDetails(props) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const { authtokens, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [details, setDetails] = useState({
        about_video: '',
    });


    const registerOptions = {
        location: {
            required: "Location is required",
            pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter valid Location",
            },
        },
        description: {
            required: "About yourself is required",
            pattern: {
                value: /^[a-zA-Z!”$%&'()*\+,\/;\[\\\]\^_`{|}~.0-9\ ]+$/,
                message: "Enter valid description about yourself",
            },
        },
        website: {
            required: "Portfolio website is is required",
            pattern: {
                value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                message: 'Portfolio website is not valid.'
            }
        },
        about_video: {
            required: "Video is is required",
        },
    };






    const VideohandleChange = (e) => {
        const { name } = e.target;
        setDetails({
            [name]: e.target.files[0]
        });

    }
    const video_register = register("about_video", registerOptions.about_video)



    const submitHandler = async (e) => {
        console.log(e,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${authtokens?.access}`
            }
        }
        const { data } = await axios.post('institutes/addinfo/', { "location": e.location, "description": e.description, "website": e.website, "institute": user?.user_id, "about_video": e.about_video[0] }, config)
        dispatch(add_institute_info(data))
        props.handleModalClose()



    }

    return (
        <>

            <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto '>
                <main id="content" role="main" class="modal fade fixed w-full max-w-md mx-auto p-6 top-0 " tabindex="-1">

                    <div class="mt-2 bg-white modal-dialog-scrollable  rounded-xl shadow-lg modal-dialog modal-dialog-centered relative w-auto  ">
                        <div class="p-4 sm:p-7">
                            <div class="text-center">
                                <h1 class="block text-2xl font-bold text-black ">Add Details</h1>
                            </div>

                            <div class="mt-5">
                                <form onSubmit={handleSubmit(submitHandler)} >
                                    <div class="grid gap-y-4 text-black">
                                        <div>
                                            <label for="location" class="block text-sm font-bold ml-1">Location</label>
                                            <div class="relative mb-2 ">
                                                <input type="text" name="location" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" {...register('location', registerOptions.location)}
                                                />
                                                <small className="text-red-500 ">
                                                    {errors?.location && errors.location.message}
                                                </small>
                                            </div>
                                            <label for="description" class="block text-sm font-bold ml-1">Tell us more about you</label>
                                            <div class="relative mb-2">
                                                <input type="text" name="description" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" {...register('description', registerOptions.description)}
                                                />
                                                <small className="text-red-500 ">
                                                    {errors?.description && errors.description.message}
                                                </small>

                                            </div>
                                            <label for="website" class="block text-sm font-bold ml-1">Your Website</label>
                                            <div class="relative mb-2">
                                                <input type="text" name="website" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" {...register('website', registerOptions.website)}
                                                />
                                                <small className="text-red-500 ">
                                                    {errors?.website && errors.website.message}
                                                </small>

                                            </div>
                                            <label for="about_video" class="block text-sm font-bold ml-1">Preview Video</label>
                                            {details?.about_video != '' && <div className=" block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" >
                                                <video controls
                                                    alt="Preview"
                                                    className='w-full h-32 mb-3 rounded'

                                                ><source src={URL.createObjectURL(details?.about_video)} /></video>

                                            </div>}
                                            <div class="relative mb-2">
                                                <input type="file" name="about_video" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" {...register('location', registerOptions.location)}
                                                    {...video_register}
                                                    onChange={e => {
                                                        video_register.onChange(e);
                                                        VideohandleChange(e);
                                                    }} />
                                                <small className="text-red-500 ">
                                                    {errors?.about_video && errors.about_video.message}
                                                </small>

                                            </div>
                                        </div>
                                        <button type="submit"
                                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                            Save changes
                                        </button>
                                        <button type="button"
                                            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                            onClick={() => props.handleModalClose()}>
                                            Close
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

export default InstitutionDetails