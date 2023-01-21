import React from 'react'
import {useSelector } from 'react-redux'


const ProfileDetails = () => {
    const { profileinfo } = useSelector((state) => state.profile)

    return (
        <div>
            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input type="text" placeholder={profileinfo?.first_name} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                </div>

                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                    <input type="text" placeholder={profileinfo?.last_name} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                </div>
                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                    <input type="text" placeholder={profileinfo?.last_name} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                </div>
                <div>
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder={`@ ${profileinfo?.username}`} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" disabled />
                </div>
            </form>

        </div>

    )
}

export default ProfileDetails