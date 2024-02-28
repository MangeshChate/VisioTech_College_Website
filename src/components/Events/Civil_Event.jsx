import React from 'react'

const Civil_Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-4  gap-5 items-center flex-col hidden lg:flex">

                    <div>
                        <img src="https://www.visiotech2023.info/img/akhasmisir.png" className="w-[200px] h-[250px] object-cover rounded-xl shadow-lg" alt="HOD" />
                    </div>
                    <div className="flex flex-col text-2xl">
                        <span >DR. A.K. Hashmi

                        </span>
                        <span className='text-muted text-sm'>HEAD OF THE DEPARTMENT</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-xl'>Student Coordinator:</span>
                        <span>Mr.Tushar Rathod (9577087373)</span>
                        <span>Ms.Pranita Garad (9673458192)</span>
                    </div>
                </div>


                <div className="col-12 col-lg-8">
                    <h1 className="text-2xl font-bold mb-4">Civil Engineering Events</h1>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">CAD War</h2>
                        <p>IN THIS EVENT ALL YOU NEED TO DO IS DESIGN OUT THE PROBLEM WITH CORRECT DIMENSIONS. SO, NOT ONLY YOU HAVE TO MAKE YOUR DESIGN PROPER BUT ALSO USE THE DIMENSION WITH PERFECTION IN ORDER TO WIN OVER OTHERS.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Bridge It</h2>
                        <p>WANT TO BUILD THE STRUCTURES IN THE WORLD? IMAGINE YOUR STRUCTURE AND BUILT IT WITH YOUR CREATIVE IDEAS AND CONQUER THE TITLE OF BRIDGEIT.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Traversing</h2>
                        <p>TRAVERSE SURVEYING IS A POPULAR METHOD OF SURVEYING. IF YOU ARE SKILLED SURVEYOR THEN HERE IS A CHANCE TO SHOW OFF YOUR SKILLS AND DEDICATION TOWARDS YOUR WORK. SO BE THE PART AND GRAB THE TITLE OF SURVEYOR.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Lab Expert</h2>
                        <p>CONCRETE IS AN IMMINENT PART OF ANY TYPE OF CONSTRUCTION. HERE COMES ‘LAB EXPERT’, IT IS TEST FOR CEMENT AND AGGREGATE WITH QUIZ ON CONCRETE TECHNOLOGY.</p>
                    </div>

                    {/* Placeholder for images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-200 h-48 rounded-md"></div>
                        <div className="bg-gray-200 h-48 rounded-md"></div>
                        <div className="bg-gray-200 h-48 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Civil_Event
