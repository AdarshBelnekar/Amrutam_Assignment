
const SearchFind = () => {
  return (
    <div className="  bg-green-50 h-[221px] w-full">
      <div className=" space-y-5 flex flex-col items-center justify-center ">
        <h2 className="mt-8 justify-center text-xl font-bold"> Find Expert Doctor For An In-Clinic  Session Here </h2>
        <div className="flex flex-row gap-5 items-center  ">



          <div  className="flex  w-[200px] h-[50px] bg-gray-100 items-center space-x-2 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ">
          <i className="fa-solid fa-location-dot text-green-800 text-2xl px-2"></i>
          <select id="options " className="bg-gray-100 items-center justify-center text-green-800">
                <option value="option1">Search Location</option>
                <option value="option2">Kolhapur</option>
                <option value="option3">Bengal</option>
                <option value="option4">Delhi</option>
              </select>
              </div>
            <div className=" flex w-[500px] h-[50px] rounded-md text-center bg-white justify-between items-center px-2 ">
            <input type="search" placeholder="Doctor ,speaclization,clinic name "  className="text-center w-[500px] h-[50px] "/><i className="fa-solid fa-arrow-right "></i> </div>
        </div> 
      </div>









    </div>
  )
}

export default SearchFind
