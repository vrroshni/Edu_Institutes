import React from 'react'

function InstitutionProfile() {
  return (
    <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-slate-300 relative py-4">
    <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <SideBar />
        <div id="content" className="bg-black/70 col-span-9 rounded-lg p-6">
            <section>
                <div class="flex justify-center min-h-screen">
                    <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div class="w-full">
                            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Institution Name.
                            </h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>

                             <div class="mt-2">

                                <div class="mt-3 md:flex md:items-center md:-mx-2">
                                    <button class="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span class="mx-2">
                                            Add  Details
                                        </span>
                                    </button>

                                    {/* <button class="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>

                                        <span class="mx-2">
                                            Edit Details
                                        </span>
                                    </button> */}
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

  )
}

export default InstitutionProfile