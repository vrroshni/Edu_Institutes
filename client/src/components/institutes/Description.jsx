import React from 'react'

function Description() {
    return (

        <div className="antialiased bg-studenthome bg-cover w-full min-h-screen text-slate-300 relative py-4">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="content" className="bg-white/10 col-span-12 rounded-lg p-6 flex justify-center">
                    <div class="p-6 shadow-lg">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <video class="w-full h-auto max-w-full" controls>
                                <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Description