import React from 'react'
import it1 from "../../assets/it1.jpg"
import it2 from "../../assets/it2.jpg"

const IT_Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-4  gap-5 items-center flex-col hidden lg:flex">

                    <div>
                        <img src="https://www.visiotech2023.info/img/sahasmisir.jpg" className="w-[200px] h-[250px] object-cover rounded-xl shadow-lg" alt="HOD" />
                    </div>
                    <div className="flex flex-col text-2xl">
                        <span >PROF. S.A.Hashmi
                        </span>
                        <span className='text-muted text-sm'>HEAD OF THE DEPARTMENT</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-xl'>Student Coordinator:</span>
                        <span>Ms.Aditi Bandewar (9975392467)
                        </span>
                        <span>Mr.Sai Kotgire (8180935457)</span>
                    </div>
                </div>

                <div className="col-12 col-lg-8 mt-5">
                    <h1 className="text-2xl font-bold mb-4">Information Technology Events</h1>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Bug Munch</h2>
                        <p>THERE ARE SO MANY BUGS AND I BET IF YOU SQUASH ONE AND HEAR CLOSELY ENOUGH, YOU CAN HEAR THE CRUNCH! EXERCISE YOUR BRAIN CELLS AND GET CRACKING, THERE ARE MORE BUGS THAN YOU CAN HANDLE, AND NOT ENOUGH SO GET SMASHING!</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Query Mania</h2>
                        <p>IN THIS EVENT DBMS AND RDBMS CONCEPTS WILL BE THE PRIMARY KEY TO ADVANCE THROUGH THE PRELIMS. IN THE FINAL ROUND, TEAMS WILL BE REQUIRED TO QUERY A GIVEN DATABASE.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Web Magic</h2>
                        <p>EVENT WHERE ACTUAL CREATIVITY IS REQUIRED TO DESIGN. SHOW US WHAT YOU CAN DO WITH ANYTHING FROM THE BASIC HTML TO THE FASCINATING JAVASCRIPT. AMAZE US WITH YOUR DESIGN AND BE CROWNED THE VICTOR.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Python Striker</h2>
                        <p>STRIKE WITH THE IRRESISTIBLE AND AMAZING QUESTION OF PYTHON UNIQUELY WITH YOUR KNOWLEDGE.</p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-200 h-48 rounded-md">
                        <img src={it1} alt="" className='object-cover w-full h-full rounded-md' />

                        </div>
                        <div className="bg-gray-200 h-48 rounded-md">
                        <img src={it2} alt="" className='object-cover w-full h-full rounded-md' />

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IT_Event
