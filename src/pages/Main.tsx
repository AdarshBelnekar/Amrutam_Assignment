import Appoinment from "../components/Appoinment"
import DoctorPanel from "../components/DoctorPanel"

import Information from "../components/Information"

// import ReviewCard from "../components/ReviewCard"




const Main = () => {
    return (
        
<div>
    
    <DoctorPanel/>
    <div className="flex flex-row justify-center">
      <div className="flex-1">
      <Information/>
      </div>
    <div className="flex-1">
    <Appoinment/>
    </div>
    
    
    
    </div>
    

         

           
           
    
 


</div>



    )
}

export default Main
