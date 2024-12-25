import ReviewCard from "./ReviewCard"
import MyImage3 from '../assets/frame.png'
import ButtonGroup from "./ButtonGroup"
import Exprience from "./Exprience"



const Information = () => {
    return (
        <div>


            <div className=" justify-center mt-5 ml-[100px] space-x-1 bg-white-700 w-[628px] h-[410px]  rounded-lg border  border-gray-300">
                <div className="   flex  justify-between bg-green-50 h-[62px] w-[625px] rounded-t-lg">
                    <h1 className="mt-3 ml-5">A Little About Us</h1>
                    <button className="bg-white h-[30px] w-[100px] mt-3 mr-1 rounded-lg text-gray-400 hover:underline border border-black">Follow <span><i className="fa-solid fa-plus"></i></span></button>
                </div>
                <p className=" text-gray-400  mt-10 text-start  px-8 py-3 text-sm">"Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat, love to work with all my hospital staff and senior doctors. 
                    Completed my graduation in Gynaecologist Medicine from the"</p>
                <span className="flex  gap-2"><hr className=" flex border border-t-slate-900  w-[500px] mt-2 ml-1 items-center" /><p className="text-center items-center underline text-green-600">Read more</p></span>
                <div className="flex items-center mt-5 gap-4 text-gray-700">
                    <span className="ml-4 text-center mt-2 font-medium text-black ">Language Spoken</span>
                    <span className="bg-slate-200 h-[30px] w-[100px] mt-3 mr-1 rounded-lg text-center">Hindi</span>
                    <span className="bg-slate-200 h-[30px] w-[100px] mt-3 mr-1 rounded-lg text-center">English</span>
                    <span className="bg-slate-200 h-[30px] w-[100px] mt-3 mr-1 rounded-lg text-center">Marathi</span>
                </div>




 
                <div className="flex space-x-4 mt-8 px-2 "> 
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300  "> <i className="fab fa-facebook-f text-green-500 text-3xl"></i> 
                    </div> 
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 "> <i className="fab fa-instagram text-green-500 text-3xl"></i> 
                    </div>
                     <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 "> <i className="fab fa-youtube text-green-500 text-3xl"></i>
                      </div> 
                      <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 "> <i className="fab fa-twitter text-green-500 text-3xl"></i>
                       </div> 
                </div>

            </div>



            <div className=" mt-5 ml-[100px] space-x-1 bg-white-700 w-[628px] h-[251px] rounded-lg border border-solid border-gray-300 ">
                <div className=' flex flex-col bg-green-50 h-[62px] w-[626px] rounded-t-lg'>
                    <h1 className='mt-3 ml-5'>Specalized In </h1>
                    < img src={MyImage3} alt="Image" className=" mt-10 ml-10 h-[200px] w-[500px]"/>
                </div>



            </div>
            <div className=" mt-5 ml-[99px] space-x-1  w-[627px] h-[222px] rounded-lg border border-solid border-gray-300">
                <div className=' flex flex-col bg-green-50 h-[62px] w-[625px] rounded-t-lg'>
                    <h1 className='mt-3 ml-5'>The Concern I Treat  </h1>
                    <div className="mt-10 ml-4 justify-end">
                    <ButtonGroup/>
                    
                    </div>
                     
                    
                </div>

               


            </div>
            <div className="  mt-6 ml-[100px]  space-x-1   w-[628px] h-[331px] rounded-lg border border-solid border-gray-300 ">
                <div className=' flex flex-col bg-green-50 h-[62px] w-[626px] rounded-t-lg'>
                    <h1 className='mt-3 ml-5'>My Work Exprience</h1>
                    <div className="mt-10 ml-4 ">
                    <Exprience/>
                    </div>
                    
                </div>


            </div>
            <div className=" mt-6 ml-[100px]  space-x-1 bg-white-200 w-[628px] h-[524px] rounded-lg border border-solid border-gray-300">

                <div className=' flex  flex-col justify-between gap-4 bg-green-50 h-[62px] w-[626px] rounded-t-lg'>

                    <h1 className='mt-3 ml-5'>Featured Review (102)</h1>
                    <div className=" mt-5 flex flex-col gap-3"><ReviewCard />
                        <ReviewCard />
                    </div>


                </div>



            </div>








        </div>


    )
}

export default Information
