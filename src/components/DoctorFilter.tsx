import React, { useState } from 'react';
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

const DoctorFilter: React.FC = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorsData as Doctor[]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedSpecialization(value);
    if (value === '') {
      setFilteredDoctors(doctorsData as Doctor[]);
    } else {
      setFilteredDoctors(
        (doctorsData as Doctor[]).filter((doctor) => doctor.specialization === value)
      );
    }
  };

  // Generate specializations dynamically from doctorsData
  const specializations = Array.from(
    new Set((doctorsData as Doctor[]).map((doctor) => doctor.specialization))
  );

  return (
    <div className="flex flex-col items-center p-4">
      <select
        value={selectedSpecialization}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      >
        <option value="">Select Specialization</option>
        {specializations.map((specialization) => (
          <option key={specialization} value={specialization}>
            {specialization}
          </option>
        ))}
      </select>
      <div className="space-y-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-4 rounded shadow">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="rounded-full w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p>{doctor.experience} years of Experience</p>
            <p>Speaks: {doctor.languages.join(', ')}</p>
            <p>Rating: {doctor.rating} ⭐</p>
            <p>
              {doctor.consultationType} Consultation - ₹{doctor.fee}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorFilter;
