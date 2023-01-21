import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'

function Description(props) {

    const instituteinfo = useLocation().state?.institute

    return (

        <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-white relative py-4">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="content" className="bg-white/10 col-span-12 rounded-lg p-6 flex justify-center">
                    <div class="p-6 shadow-lg">
                        <h2 class="text-white text-3xl font-bold mb-2"><u>{instituteinfo?.institute?.full_name}</u> </h2>
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <video class="w-full h-80 " controls>
                                <source src={instituteinfo?.about_video
                                }  />
                            </video>
                        </a>
                        <h2  className='text-white text-2xl font-bold mt-2'>About</h2>
                        <p class="text-white text-base mb-4">
                            {instituteinfo?.description}
                        </p>
                        <p className='text-white font-bold'>
                            {instituteinfo?.website}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Description