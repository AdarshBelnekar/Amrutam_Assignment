import React from 'react';

const Exprience: React.FC = () => {
  return (
    <div className="bg-white  rounded-lg p-6   w-[600px] justify-start">
      <h2 className="text-l text-green-600 font-bold mb-4">I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</h2>
      <hr  className='border border-gray-200 m-3'/>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div >
            <div className='flex flex-row gap-1'>
          <i className="fa-regular fa-hospital border rounded-lg px-2 py-2 bg-gray-100"  style={{color: "#1505f0",}} ></i>
            <h3 className="text-sm font-semibold flex ">Midtown Medical Clinic</h3></div>
            <p className="text-gray-600">Senior doctor</p>
          </div>
          <span className="text-gray-500">2016-PRESENT</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
          
          <div className='flex flex-row gap-1'>
          <i className="fa-regular fa-hospital border rounded-lg px-2 py-2 bg-gray-100"  style={{color: "#1505f0",}} ></i>
            <h3 className="text-sm font-semibold flex ">Midtown Medical Clinic</h3></div>
            <p className="text-gray-600">Senior doctor</p>
          </div>
          <span className="text-gray-500">2010-2015</span>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
