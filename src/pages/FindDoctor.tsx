
import FilterButtons from "../components/FilterButtons"
import SearchFind from "../components/SearchFind"



const FindDoctor = () => {
  return (

     <div className="flex flex-col">
     <SearchFind/>
     <div className="flex flex-1 gap-5 ml-7 justify-center items-center">
     <FilterButtons/>
     </div>
     
    
  
     
     
  

    </div>
  )
}

export default FindDoctor
