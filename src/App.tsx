import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom'

import './index.css';
import Main from './pages/Main';
import Headers from './components/Headers';
import FindDoctor from './pages/FindDoctor';
import Login from './pages/Login';

const App: React.FC = () => {
   const [activeLink, setActiveLink] = useState<string>("");
    const handleSetActiveLink = (link: string) => { setActiveLink(link); };

    

  return (
    <div className="App">

      <Headers activeLink={activeLink} onSetActiveLink={handleSetActiveLink}/>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/find" element={<FindDoctor/>} />
        <Route path="/login" element={<Login/>} />
        
        {/* Add more routes as needed */}
      </Routes>
    






      

    </div>
  );
};

export default App;




