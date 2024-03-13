import React from 'react';
import cse1 from "../../assets/cse1.jpg"
import cse2 from "../../assets/cse2.jpg"
import cse3 from "../../assets/cse3.jpg"

const CSE_Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-4  gap-5 items-center flex-col hidden lg:flex">

                    <div>
                        <img src="https://mgmcen.ac.in/images/gallery/07012014234222-hod.png" className="w-[200px] h-[250px] object-cover rounded-xl shadow-lg" alt="HOD" />
                    </div>
                    <div className="flex flex-col text-2xl">
                        <span >Dr. Mrs. A.M.Rajurkar</span>
                        <span className='text-muted text-sm'>Head of the Department</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-xl'>Student Coordinator:</span>
                        <span>Mr.Angulwar Omkar (7447523950)</span>
                        <span>Mr.Vedant Kahalekar (9373641669)</span>
                    </div>
                </div>


                <div className="col-12 col-lg-8">
                    <h1 className="text-2xl font-bold mb-4">Computer Science & Engineering Events</h1>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Blind C</h2>
                        <p>PARTICIPANTS ARE EXPECTED TO COMPLETE THE PROGRAMMING TASK IN C LANGUAGE WITHOUT SWITCHING ON THE MONITORS.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">CodeIt</h2>
                        <p>PARTICIPANTS ARE EXPECTED TO COMPLETE THE GIVEN PROGRAMMING CHALLENGE USING PROGRAMMING LANGUAGE OF THEIR CHOICE.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Troubleshoot</h2>
                        <p>PARTICIPANTS ARE EXPECTED TO DEBUG THE GIVEN PROGRAM BY REMOVING POSSIBLE ERRORS AND EXECUTE THE CODE SUCCESSFULLY.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Dominators League</h2>
                        <p>MULTIPLAYER GAMING EVENT (BGMI,VALORANT)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="bg-gray-200 h-48 rounded-md">
                            <img src={cse1} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>

                        <div className="bg-gray-200 h-48 rounded-md">
                            <div className="bg-gray-200 h-48 rounded-md">
                                <img src={cse2} alt="" className='object-cover w-full h-full rounded-md' />
                            </div>

                        </div>
                        <div className="bg-gray-200 h-48 rounded-md">
                            <div className="bg-gray-200 h-48 rounded-md">
                                <img src={cse3} alt="" className='object-cover w-full h-full rounded-md' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSE_Event;
