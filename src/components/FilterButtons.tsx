import { useState } from 'react';
import myImage2 from '../assets/Ellipse 727.png';
import doctorsData from '../file.json';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  languages: string[];
  rating: number;
  consultationType: 'Video' | 'Chat';
  fee: number;
  image: string;
}

const FilterButtons = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedFee, setSelectedFee] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  

  const handleSpecializationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecialization(event.target.value);
    event.preventDefault();
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleFeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFee(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };



  // Filter doctors based on selected options
  const filterDoctors = () => {
    return doctorsData.filter((doctor) => {
      const matchesSpecialization =
        !selectedSpecialization || doctor.specialization === selectedSpecialization;
      const matchesLanguage = !selectedLanguage || doctor.languages.includes(selectedLanguage);
      const matchesFee = !selectedFee || doctor.fee.toString() === selectedFee;
      const matchesGender = !selectedGender || doctor.name.toLowerCase().includes(selectedGender.toLowerCase());

      return matchesSpecialization && matchesLanguage && matchesFee && matchesGender;
    });
  };

  const specializations = Array.from(
    new Set((doctorsData as Doctor[]).map((doctor) => doctor.specialization))
  );

  const languages = Array.from(new Set(doctorsData.flatMap((doctor) => doctor.languages)));

  return (
    <div className="flex flex-col items-center">
      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-5 justify-center py-4">
        {/* Expertise Dropdown */}
        <select
          id="options"
          value={selectedSpecialization}
          onChange={handleSpecializationChange}
          className="block w-[150px] bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Expertise</option>
          {specializations.map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>

        {/* Language Dropdown */}
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="block w-[150px] bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Language</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* Fees Dropdown */}
        <select
          id="fees"
          value={selectedFee}
          onChange={handleFeeChange}
          className="block w-[150px] bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Fees</option>
          <option value="1000">₹1000</option>
          <option value="2000">₹2000</option>
          <option value="5000">₹5000</option>
        </select>

        {/* Gender Dropdown */}
        <select
          id="gender"
          value={selectedGender}
          onChange={handleGenderChange}
          className="block w-[150px] bg-gray-100 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Cancel Button (clear all filters) */}
        
        
      </div>
      <hr className="my-2 border-gray-300" />

      {/* Display Section */}
      <div className="py-8">
        <div className="flex rounded-xl items-center max-w-full max-h-full">
          {/* Example of active filters */}
          {selectedSpecialization && (
            <p className="px-2 py-2 ml-5 text-center space-x-2 rounded-lg bg-green-100">
              {selectedSpecialization}{' '}
              <button onClick={() => setSelectedSpecialization('')}>
                <i className="fa-solid fa-xmark px-2"></i>
              </button>
            </p>
          )}
          {selectedLanguage && (
            <p className="px-2 py-2 ml-5 text-center rounded-lg bg-green-100">
              {selectedLanguage}{' '}
              <button onClick={() => setSelectedLanguage('')}>
                <i className="fa-solid fa-xmark px-2"></i>
              </button>
            </p>
          )}
          {selectedFee && (
            <p className="px-2 py-2 ml-5 text-center rounded-lg bg-green-100">
              ₹{selectedFee}{' '}
              <button onClick={() => setSelectedFee('')}>
                <i className="fa-solid fa-xmark px-2"></i>
              </button>
            </p>
          )}
          {selectedGender && (
            <p className="px-2 py-2 ml-5 text-center rounded-lg bg-green-100">
              {selectedGender}{' '}
              <button onClick={() => setSelectedGender('')}>
                <i className="fa-solid fa-xmark px-2"></i>
              </button>
            </p>
          )}
        </div>
        
      </div>
      

      {/* Filtered Doctors Display */}
      <div className="flex flex-wrap justify-center gap-6">
        {filterDoctors().map((doctor) => (
          <div key={doctor.id} className="flex-1 bg-yellow-50 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            <div className="flex items-center">
              <div className="ml-4">
                <img
                  className="ml-5 py-5 w-[159px] h-[159px] no-repeat rounded-full shadow-lg"
                  style={{ backgroundImage: `url(${myImage2})` }}
                />
                <p className="bg-black rounded-lg w-[50px] ml-20 text-white">4.5⭐</p>
                <div className="text-2xl font-semibold">{doctor.name}</div>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                <i className="fa-solid fa-pills px-2"></i>
                {doctor.specialization}
              </p>
              <p>
                <i className="fa-solid fa-graduation-cap px-2"></i>
                {doctor.experience} years of Experience
              </p>
              <p>
                <i className="fa-regular fa-message px-2"></i>
                Speaks: {doctor.languages.join(', ')}
              </p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <div className="border-2 border-solid border-green-300 justify-center items-center px-4 py-2 rounded-lg flex flex-col w-[200px] shadow-sm">
                <p className="text-sm">Video Consultation</p>
                <p className="text-green-700">₹{doctor.fee}</p>
              </div>
              <div className="border-2 border-solid border-green-300 justify-center items-center px-4 py-2 rounded-lg flex flex-col w-[200px] shadow-sm">
                <p className="text-sm">Chat Consultation</p>
                <p className="text-green-700">Free</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-white border border-green-700 h-[50px] w-[300px] text-green-700 rounded py-2 px-4 hover:shadow-xl">
                Video Consultation
              </button>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <button className="bg-green-800 h-[50px] w-[300px] text-white rounded py-2 px-4 hover:bg-green-700">
                Chat Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
