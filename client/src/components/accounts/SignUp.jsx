import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import Loader from '../elements/Loader';
import { signUp } from '../../redux/services/auth'





const SignUp = () => {

    const { isRegisterd, isLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const registerOptions = {
        username: { required: "Username is required" },
        firstname: { required: "First Name is required" },
        lastname: { required: "Last Name is required" },
        is_institute: { required: "This field is required" },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        },
        confirmpassword: {
            required: "Password confirmation is required",
            validate: (val) => {
                if (watch('password') != val) {
                    return "Your passwords didn't match";
                }
            },
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password will have at least 8 characters"
            }
        }
    };

    useEffect(() => {

        if (isRegisterd)
                Navigate('/login')
    }, [isRegisterd])



    const RegisterHandler = (data) => {
        const { username, firstname, lastname, email, password,is_institute } = data;
        dispatch(signUp({ username, firstname, lastname, email, password,is_institute }))
    }



    return (
        <div className="w-full h-screen font-sans bg-cover bg-login"  >
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25" onSubmit={handleSubmit(RegisterHandler)}>
                            <p className="mb-4 text-2xl font-bold text-center text-white">
                                Create a New Account
                            </p>
                            <div className="flex justify-center items-center mb-4">
                                <div className=" relative ">
                                    {isLoading && <Loader />}
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter your First Name" name='firstname' {...register('firstname', registerOptions.firstname)} />
                                    <small className="text-red-500 font-bold ">
                                        {errors?.firstname && errors.firstname.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter your Last Name" name='lastname' {...register('lastname', registerOptions.lastname)} />
                                    <small className="text-red-500 font-bold">
                                        {errors?.lastname && errors.lastname.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter your username" name='username' {...register('username', registerOptions.username)} />
                                    <small className="text-red-500 font-bold">
                                        {errors?.username && errors.username.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter your Email" name='email' {...register('email', registerOptions.email)} />
                                    <small className="text-red-500 font-bold">
                                        {errors?.email && errors.email.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative flex">
                                    <div class="flex items-center">
                                        <input id="default-radio-1" type="radio" value="False" name="is_institute" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  {...register('is_institute', registerOptions.is_institute)}/>
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                                    </div>
                                    <div class="flex items-center ml-4">
                                        <input id="default-radio-2" type="radio" value="True" name="is_institute" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  {...register('is_institute', registerOptions.is_institute)}/>
                                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Institution</label>
                                    </div>
                                    <small className="text-red-500 font-bold">
                                        {errors?.is_institute && errors.is_institute.message}
                                    </small>

                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" name='password' {...register('password', registerOptions.password)} />
                                    <small className="text-red-500 font-bold ">
                                        {errors?.password && errors.password.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Confirm Password" name='confirmpassword'  {...register('confirmpassword', registerOptions.confirmpassword)} />
                                    <small className="text-red-500 font-bold">
                                        {errors?.confirmpassword && errors.confirmpassword.message}
                                    </small>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Create Account
                                </button>
                            </div>
                            <div className="text-center">
                                <a onClick={()=>Navigate('/login')} className="right-0 inline-block text-sm font-light align-baseline text-500 cursor-pointer hover:text-white hover:scale-110 duration-300 ">
                                    Already have an account?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp