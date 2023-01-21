import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/services/auth'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Loader from '../elements/Loader';



const Login = () => {

    const { user,  isLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const registerOptions = {
        email: {
            required: "Email is required",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password will have at least 8 characters"
            }
        }
    };

    const loginHandler = (data) => {
        const { email, password } = data;
        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (user) {
            Navigate('/')
        }
     
    }, [user])


    return (
        <div className="w-full h-screen font-sans bg-cover bg-login"  >
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25" onSubmit={handleSubmit(loginHandler)}>
                            <p className="mb-4 text-2xl font-bold text-center text-white">
                                Login
                            </p>
                            <div className="flex justify-center items-center mb-4">
                                <div className=" relative ">
                                    {isLoading && <Loader />}
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" name='email' {...register('email', registerOptions.email)} />
                                    <small className="text-red-500 font-bold ">
                                        {errors?.email && errors.email.message}
                                    </small>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="••••••••" name='password'  {...register('password', registerOptions.password)} />
                                    <small className="text-red-500 font-bold">
                                        {errors?.password && errors.password.message}
                                    </small>

                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Validate
                                </button>
                            </div>
                            <div className="text-center">
                                <a onClick={() => Navigate('/signup')} className="right-0 inline-block text-sm font-light align-baseline text-500 cursor-pointer hover:text-white hover:scale-110 duration-300  ">
                                    Create an account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login