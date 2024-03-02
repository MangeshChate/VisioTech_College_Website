import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Contactcard from './Contactcard';

function Contact() {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm('service_wad1uqb', 'template_sxovywc', form.current, 'zZFALP4bkPVP94DTX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        navigate('/');
    };

    return (
        <>
            <div className='h-[70vh] bg-cover bg-center' style={{ backgroundImage: "url('https://i.ytimg.com/vi/WOY1fySdVZo/maxresdefault.jpg')" }}>
                <div className='w-full h-full bg-black bg-opacity-50 flex '>
                    <div className="container-fluid lg:p-10 p-0 flex justify-center items-center">
                        <form ref={form} onSubmit={sendEmail} className='bg-white bg-opacity-80 lg:w-[800px] p-6 rounded-3 shadow '>
                            <input type="email" name="email" placeholder='Enter Your Email Address' className="form-control mb-4" required />
                            <textarea name="message" placeholder='Enter Your Message' className='form-control mb-4' rows="5" required></textarea>
                            <button type='submit' className="btn bg-primary text-light rounded-0 shadow font-bold w-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='p-4 pb-5'>
                <div className="container mx-auto mt-4">
                    <h1 className="text-3xl font-bold mb-4">Event Details</h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Visiotech Faculty Coordinator</h2>
                                <ul>
                                    <li>Dr. A.K. Hashmi, Mr. A.A. Bhore, Mr. D.J. Tuptewar</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Financial Head</h2>
                                <ul>
                                    <li>MR.SANTOSH DAMKONDWAR (7030247384)</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Special Event Student Coordinator</h2>
                                <ul>
                                    <li>MR.RAHUL SHIVLAD (7262044688)</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Paper Presentation</h2>
                                <ul>
                                    <li>Ms. Sahitya Grunam (7499489168)</li>
                                    <li>Mr. Vaishnav Sasane (9811297138)</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Click the Best</h2>
                                <ul>
                                    <li>Mr. Sumit Rathod (9322277560)</li>
                                    <li>Mr. Aditya Pawar (7558690589)</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Project Competition</h2>
                                <ul>
                                    <li>Mr. Krishna Ardhapurkar (9322449552)</li>
                                    <li>Mr. Mangesh Kattulwad (9503579989)</li>
                                </ul>
                            </div>

                            <div className="border p-4 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                                <h2 className="text-xl font-bold mb-2">Poster Presentation</h2>
                                <ul>
                                    <li>Ms. Vaishnavi Deshmukh (9420541599)</li>
                                    <li>Ms. Sharakshi Kharadkar (7020889448)</li>
                                </ul>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:mx-auto">
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.3296757664705!2d77.32398021447892!3d19.179598958849965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1709144820272!5m2!1sen!2sin" frameBorder="0" style={{ width: "100%", height: "450px", border: "0" }} allowFullScreen loading="lazy"></iframe>
            </div>
        </>
    );
}

export default Contact;
