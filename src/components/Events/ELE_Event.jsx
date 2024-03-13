import React from 'react'

const ELE_Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-4  gap-5 items-center flex-col hidden lg:flex">

                    <div>
                        <img src="https://www.visiotech2023.info/img/jondhalemam.png" className="w-[200px] h-[250px] object-cover rounded-xl shadow-lg" alt="HOD" />
                    </div>
                    <div className="flex flex-col text-2xl">
                        <span >Dr. K.C. Jondhale
                        </span>
                        <span className='text-muted text-sm'>HEAD OF THE DEPARTMENT</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-xl'>Student Coordinator:</span>
                        <span>Mr.Kaivalya Choudhary (9373061814)</span>
                        <span>Ms.Sanskruti More(8237121031)</span>
                    </div>
                </div>


                <div className="col-12 col-lg-8">
                    <h1 className="text-2xl font-bold mb-4">Electronics and Telecommunication Engineering Events</h1>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Minute to Win It</h2>
                        <p>STUDENTS WILL BE GIVEN SOME TECHNICAL TASK. THEY HAVE TO COMPLETE IT WITHIN A MINUTE.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Circuit Designing</h2>
                        <p>YOU WILL BE GIVEN ELECTRONIC COMPONENTS AND CIRCUIT DIAGRAM AND YOU WILL HAVE TO DESIGN THE CIRCUIT IN GIVEN TIME.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Circuit Debugging</h2>
                        <p>DO YOU BELIEVE YOU ARE AN EXPERTISE IN DEBUGGING ANY CIRCUIT QUICKLY? JOIN THE EVENT AND SHOW YOUR TALENT IN DEBUGGING.</p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Cryptic Crossword Puzzle</h2>
                        <p>STUDENTS WILL BE ASKED SOME TECHNICAL QUESTIONS AND THEY WILL HAVE TO ANSWER THEM IN GIVEN TIME.</p>
                    </div>

                    {/* Placeholder for images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ELE_Event
