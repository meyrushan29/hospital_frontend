import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Find_Doctor = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [minExperience, setMinExperience] = useState(0);
  const navigate = useNavigate();

  const doctors = [
    { name: 'Dr. John Doe', specialization: 'Cardiology', age: 45, gender: 'Male', rating: 4.5, experience: 15 },
    { name: 'Dr. Jane Smith', specialization: 'Pediatrics', age: 38, gender: 'Female', rating: 4.8, experience: 10 },
    { name: 'Dr. Mike Johnson', specialization: 'Neurology', age: 52, gender: 'Male', rating: 4.2, experience: 20 },
    { name: 'Dr. Sarah Brown', specialization: 'Dermatology', age: 41, gender: 'Female', rating: 4.6, experience: 12 },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
      (specialization === '' || doctor.specialization === specialization) &&
      doctor.rating >= minRating &&
      doctor.experience >= minExperience
  );

  return (
    <div className="bg-gradient-to-br from-teal-100 to-cyan-300 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-teal-800 mb-12 text-center">Find Your Doctor</h1>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name"
                className="w-full p-4 bg-gray-100 rounded-2xl text-teal-800 placeholder-teal-400 border-2 border-transparent focus:border-teal-500 focus:outline-none transition duration-300"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <select
              className="w-full p-4 bg-gray-100 rounded-2xl text-teal-800 border-2 border-transparent focus:border-teal-500 focus:outline-none transition duration-300"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">All Specializations</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Neurology">Neurology</option>
              <option value="Dermatology">Dermatology</option>
            </select>
            <select
              className="w-full p-4 bg-gray-100 rounded-2xl text-teal-800 border-2 border-transparent focus:border-teal-500 focus:outline-none transition duration-300"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              <option value="0">All Ratings</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
            <select
              className="w-full p-4 bg-gray-100 rounded-2xl text-teal-800 border-2 border-transparent focus:border-teal-500 focus:outline-none transition duration-300"
              value={minExperience}
              onChange={(e) => setMinExperience(Number(e.target.value))}
            >
              <option value="0">All Experience</option>
              <option value="5">5+ Years</option>
              <option value="10">10+ Years</option>
              <option value="15">15+ Years</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-teal-800 mb-2">{doctor.name}</h2>
                <p className="text-xl text-cyan-600 font-semibold mb-4">{doctor.specialization}</p>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Age: {doctor.age}</span>
                  <span>Gender: {doctor.gender}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-yellow-500 text-2xl mr-1">★</span>
                    <span className="text-xl font-bold text-yellow-700">{doctor.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{doctor.experience} years exp.</span>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-teal-500 hover:to-cyan-600 transition duration-300 shadow-md hover:shadow-lg"
                  onClick={() => navigate('/admission')}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Find_Doctor;