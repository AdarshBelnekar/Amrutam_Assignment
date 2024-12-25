import React from 'react';
import TimingAppoinment from './TimingAppoinment';

const Appointment: React.FC = () => {
  return (

    <div className="mt-5 w-[584px] h-[900px] bg-white-200 rounded-2xl border border-gray-300  space-y-[30px]">
      <div className="flex flex-row justify-between p-3 max-w-md h-10 mx-auto mt-5 bg-white rounded-xl shadow-md items-center">
        <p className=" flex-1 text-start text-black-900 font-semibold">Appointment Fees</p>
        <span className="text-emerald-900 font-bold ">₹600.00</span>
      </div>
      <div className='space-y-[100px]'>
      <div className='flex justify-between'>
        <p className=" ml-4 text-base font-normal ">Select your mode of session</p>
        <span><hr className="border border-solid border-gray-300 my-4 w-[300px] mt-4" /></span>
        </div></div>

      <div className="mt-4 space-x-2 ml-5 flex gap-4 items-center">
        <button className=" flex flex-col border border-gray-200 shadow-md text-black-600  rounded w-[150px] h-[50px] items-center">In Clinc<p className=' font-semibold text-gray-400 text-wrap text-[10px] text-black-100'>4.5hr</p></button>
        <button className=" flex flex-col border border-gray-200 shadow-md text-green-600  rounded w-[150px] h-[50px] items-center">Video<p className=' font-semibold text-gray-400 text-wrap text-[10px] text-black-100'>4.5hr</p></button>
        <button className=" flex flex-col border border-gray-200 shadow-md text-green-600  rounded w-[150px] h-[50px] items-center">Chat<p className=' font-semibold text-gray-400 text-wrap text-[10px] text-black-100'>4.5hr</p></button>
      </div>


      <div className='mt-3  flex justify-between  '>
        <h3 className="text-base font-normal ml-6">Pick Your Sessions</h3><span><hr className="border border-solid border-gray-300 my-4 w-[300px] mt-4" /></span>
        <i className="fa-regular fa-calendar px-3 text-2xl"></i>
        </div>

       <div className=' border border-gray-200 ml-8 mr-8  rounded-xl  min-h-10'>
      <div className="mt-4  flex  gap-2 h-[120px] items-center ">
      
      <i className="fa-regular fa-circle-left px-2"></i>
         <span className=" ml-4 flex flex-col  border py-2 px-4 bg-green-100 rounded-xl text-center font-bold">Mon 10 Oct,<p className='text-red-500'>10 slots</p></span>
         <span className="  ml-2 flex flex-col  border py-2 px-4 bg-green-100 rounded-xl ">Tue 11 Oct,<p>10 slots</p></span>
         <span className="  mr-4 flex flex-col  border py-2 px-4 bg-green-100 rounded-xl ">Wed 13 Oct,<p>10 slots</p></span>

         <i className="fa-regular fa-circle-right  px-2" ></i>
      </div>
      </div>

      <div>
        <TimingAppoinment/>
      </div>
      

      <button className="mt-6 ml-8 bg-green-800 text-white py-2 px-4 rounded  w-[500px]  ">Make an Appointment</button>





    </div>

  );
};

export default Appointment;
