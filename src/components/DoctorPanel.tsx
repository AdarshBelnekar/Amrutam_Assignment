import myImage from '../assets/Frame 29.png'
import myImage2 from '../assets/Ellipse 727.png'


const DoctorPanel = () => {
    return (

        



            <div className=" flex flex-col  py-4  mt-5  ml-[110px] w-[1220px] h-[350px] rounded-t-xl ">


                <div className="  flex-1  bg-green-200 w-[1220px] no-repate rounded-t-xl h-[100px]"
                    style={{ backgroundImage: `url(${myImage})` }}>



                </div>


                <div className=" flex flex-1  h-[150px] bg-yellow-50 ">

                    
                    <img className=" ml-5 py-5 w-[159px] h-[159px] no-repeat rounded-full shadow-lg  "
                        style={{ backgroundImage: `url(${myImage2})` }} />


                    <div className=" flex  ml-6 mt-5  space-x-[130px] justify-between ">



                        <div className='' >
                            <div className=' flex items-center gap-3'>
                                <h1 className="  text-l ">Dr. Bruce Willis</h1>
                                <i className="fa-solid fa-circle-check text-blue-500 "></i>
                              </div>

                              <p className="text-green-600 text-sm "> Gynecologist </p>
                              <div className="block items-center gap-2 text-yellow-500">
                                <span className='text-xs'>4.2 ⭐⭐⭐⭐⭐</span>

                                </div>
                        </div>


                        <div className="   flex gap-8  justify-center items-center ">
                            <div>
                                <span className="block text-green-600 text-sm  ">Followers</span>
                                <span className="font-bold">18k</span>
                            </div>
                            <div>
                                <span className="block text-green-600 text-sm">Post</span>
                                <span className="font-bold">210</span>
                            </div>
                            <div>
                                <span className="block text-green-600 text-sm">Following</span>
                                <span className="font-bold">210</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end py-3"> <button className="bg-green-800 h-[50px] w-[300px] text-white rounded py-2 px-4 hover:bg-green-700"> Book an Appointment </button></div>

                    </div>
                </div>




            </div>
        

    )
}

export default DoctorPanel
