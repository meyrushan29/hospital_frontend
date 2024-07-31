import React, { useState } from 'react';

function Appointments() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    phoneNumber: '',
    email: '',
    gender: '',
    category: '',
    doctorName: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
   
    <div className="mt-24 mb-0 bg-gradient-to-tr from-teal-100 to-cyan-400 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="space-y-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 rounded-3xl shadow-2xl  ">
        <div >
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Book Your Appointment
          </h2>
          <p className="mt-2 text-center text-sm text-indigo-600">
            Fill in the details below to schedule your visit
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-4">
              <input
                id="patientName"
                name="patientName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <select
                  id="gender"
                  name="gender"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <select
                id="category"
                name="category"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="general">General Physician</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="pediatrician">Pediatrician</option>
              </select>
              <input
                id="doctorName"
                name="doctorName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                placeholder="Doctor Name"
                value={formData.doctorName}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                  value={formData.date}
                  onChange={handleChange}
                />
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Appointments;