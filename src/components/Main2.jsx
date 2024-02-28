import React from 'react';
import broucher from "../assets/broucher.jpeg";

function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = broucher;
    anchor.download = 'broucher.jpeg';
    anchor.click();
  };

  return (
    <div className='mt-5 pb-5 bg-[#162241]'>
      <div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:text-light mt-5 flex flex-col justify-center">
            <span className='text-info'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About VISIOTECH</h1>
            <p className='text-white text-lg lg:text-xl'>
              Today’s Vision Tomorrow’s Technology
              This year MGM’s COE is celebrating its 38th year of establishment. We are organizing a Technical Event- VisioTech2023. The name VisioTech was coined as it represents Vision of Technocrats. The event will be packed with multiple knowledge and testing capabilities of would-be engineers.
            </p>
            <button className="bg-primary p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-light" onClick={downloadBroucher}>
              Download Brochure
            </button>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a href={broucher} download="broucher.jpeg">
              <img src={broucher} className='lg:w-full rounded-lg' alt="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
