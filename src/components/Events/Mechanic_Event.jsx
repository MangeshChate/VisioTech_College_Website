import React from 'react'
import MECH from "../../assets/MECH.jpg"
const Mechanic_Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-4  gap-5 items-center flex-col hidden lg:flex">

                    <div>
                        <img src="https://www.visiotech2023.info/img/harkaresir.jpg" className="w-[200px] h-[250px] object-cover rounded-xl shadow-lg" alt="HOD" />
                    </div>
                    <div className="flex flex-col text-2xl">
                        <span >Dr. M.G. Harkare
                        </span>
                        <span className='text-muted text-sm'>HEAD OF THE DEPARTMENT</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-xl'>Student Coordinator:</span>
                        <span>Mr.Dipak Devanpalle (7499015939)</span>
                        <span>Mr.Swarup Jambhlikar (78209 95070)</span>
                    </div>
                </div>


                <div className="col-12 col-lg-8">
                    <h1 className="text-2xl font-bold mb-4">Mechanical Engineering Events</h1>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">CNC Programming</h2>
                        <p>CNC PROGRAMMING (COMPUTER NUMERICAL CONTROL PROGRAMMING) IS UTILIZED BY MANUFACTURERS AND INDUSTRIAL EXPERTS TO CREATE PROGRAM INSTRUCTIONS FOR COMPUTERS TO CONTROL A MACHINE TOOL. CNC IS HIGHLY INVOLVED IN THE MANUFACTURING PROCESS AND IMPROVES AUTOMATION AS WELL AS FLEXIBILITY.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Drone Technology</h2>
                        <p>DRONES ARE A COMBINATION OF HARDWARE AND SOFTWARE COMPONENTS TO ACHIEVE SUCCESSFUL TAKEOFF, FLIGHT AND LANDING. DRONES ARE EQUIPPED WITH ROTORS OR FIXED WINGS, SENSORS, NAVIGATION SYSTEMS AND GYROSCOPES, AND ARE OPERATED BY GROUND CONTROL STATIONS.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">CAD War</h2>
                        <p>WORLD OF DESIGNING IS RUNNING MORE THAN THE SPEED OF LIGHT. NOW IT'S TIME TO EXPRESS YOUR IMAGINATION POWER THROUGH CAD. HERE "CAD WAR" IS CHALLENGING YOUR DESIGNING BRILLIANCE.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Electric Vehicles</h2>
                        <p>AN EV INCLUDES BOTH A VEHICLE THAT CAN ONLY BE POWERED BY AN ELECTRIC MOTOR. A VEHICLE CAN BE POWERED BY AN ELECTRIC MOTOR THAT DRAWS ELECTRICITY FROM A BATTERY AND BY AN INTERNAL COMBUSTION ENGINE (PLUG-IN HYBRID ELECTRIC VEHICLE).</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Robotics</h2>
                        <p>ROBOTICS IS A BRANCH OF ENGINEERING THAT INVOLVES THE CONCEPTION, DESIGN, MANUFACTURE AND OPERATION OF ROBOTS. THE OBJECTIVE OF THE ROBOTICS FIELD IS TO CREATE INTELLIGENT MACHINES THAT CAN ASSIST HUMANS IN A VARIETY OF WAYS.</p>
                    </div>

                    {/* Placeholder for images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-200 h-48 rounded-md">
                        <img src={MECH} alt="" className='object-cover w-full h-full rounded-md' />

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mechanic_Event
