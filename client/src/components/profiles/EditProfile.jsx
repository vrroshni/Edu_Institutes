import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateprofile } from '../../redux/slices/profile';
import { profile } from '../../redux/services/profile';
import { toast } from 'react-hot-toast';



const EditProfile = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange"
    });
    const dispatch = useDispatch()
    const { profileinfo } = useSelector((state) => state.profile)
    const { authtokens } = useSelector((state) => state.auth)


    const registerOptions = {
        username: { required: "Username is required" },
        firstname: { required: "First Name is required" },
        lastname: { required: "Last Name is required" },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        },

    };



    const [details, setDetails] = useState({
        firstname: profileinfo?.first_name,
        lastname: profileinfo?.last_name,
        username: profileinfo?.username,
        email: profileinfo?.email,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails({
            ...details,
            [name]: value
        });
    }


    const first_name_register = register("firstname", registerOptions.firstname)
    const last_name_register = register("lastname", registerOptions.lastname)
    const username_register = register("username", registerOptions.username)
    const email_register = register("email", registerOptions.email)


    const updateHandler = async (e) => {

        try {
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    Authorization: `Bearer ${authtokens?.access}`
                }
            }

            const { data } = await axios.patch('user/editprofile/', { "first_name": details?.firstname, "last_name": details?.lastname, "username": details?.username, "email": details?.email }, config)

            dispatch(updateprofile(data))
            const token = authtokens?.access
            dispatch(profile({ token }))
            toast.success('Your profile is updated');
            



        }
        catch (err) {
            const error = err.response && err.response.data.detail ?
                err.response.data.detail : err.message
            toast.error(error);



        }


    }



    return (
        <div>
            <form onSubmit={handleSubmit(updateHandler)} class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input type="text" name='firstname' value={details?.firstname} class=" placeholder-black block w-full px-5 py-3 mt-2  bg-white border border-gray-200 rounded-lg  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...first_name_register}
                        onChange={e => {
                            first_name_register.onChange(e);
                            handleChange(e);
                        }} />
                    <small className="text-red-500 ">
                        {errors?.firstname && errors.firstname.message}
                    </small>

                </div>

                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                    <input type="text" name='lastname' value={details?.lastname} class=" placeholder-black block w-full px-5 py-3 mt-2  bg-white border border-gray-200 rounded-lg  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...last_name_register}
                        onChange={e => {
                            last_name_register.onChange(e);
                            handleChange(e);
                        }} />
                    <small className="text-red-500 ">
                        {errors?.lastname && errors.lastname.message}
                    </small>

                </div>



                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                    <input type="text" name='username' value={details?.username} class=" placeholder-black block w-full px-5 py-3 mt-2  bg-white border border-gray-200 rounded-lg  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...username_register}
                        onChange={e => {
                            username_register.onChange(e);
                            handleChange(e);
                        }} />
                    <small className="text-red-500 ">
                        {errors?.username && errors.username.message}
                    </small>
                </div>

                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                    <input type="email" name='email' value={details?.email} class=" placeholder-blackblock w-full px-5 py-3 mt-2  bg-white border border-gray-200 rounded-lg  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...email_register}
                        onChange={e => {
                            email_register.onChange(e);
                            handleChange(e);
                        }} />
                    <small className="text-red-500 ">
                        {errors?.email && errors.email.message}
                    </small>

                </div>

                <br />
                <button
                    type="submit" class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors  duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Update Profile</span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </form>

        </div>
    )
}

export default EditProfile