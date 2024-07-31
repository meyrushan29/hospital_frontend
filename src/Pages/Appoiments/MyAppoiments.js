import React, { useState } from 'react';
import { FaCalendar, FaClock, FaUser, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyAppoiments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2024-07-20', patientName: 'John Doe', status: 'Pending', time: '10:00 AM' },
    { id: 2, date: '2024-07-21', patientName: 'Jane Smith', status: 'Completed', time: '2:00 PM' },
    { id: 3, date: '2024-07-22', patientName: 'Alice Johnson', status: 'Cancelled', time: '3:30 PM' },
    { id: 4, date: '2024-07-23', patientName: 'Bob Brown', status: 'Pending', time: '11:15 AM' },
  ]);

  const filteredAppointments = activeTab === 'All' 
    ? appointments 
    : appointments.filter(app => app.status === activeTab);

    const handleEditAppointment = (id) => {
      console.log(`Edit appointment with id: ${id}`);
      navigate('../admission');
    };
    

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? {...appointment, status: 'Cancelled'} : appointment
    ));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className=''>
    <div className="container mt-20  bg-gradient-to-br from-teal-100 to-cyan-200 min-h-screen p-8 h-screen ">
      <h1 className="text-3xl font-bold mt-2 mb-6 text-center text-gray-800">My Appointments</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-4">
        {['All', 'Pending', 'Completed', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-1 rounded-full ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Appointments Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAppointments.map((appointment) => (
          <div key={appointment.id} className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className={`p-4 ${getStatusColor(appointment.status)}`}>
              <span className="font-semibold">{appointment.status}</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{appointment.patientName}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <FaCalendar className="mr-2" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FaClock className="mr-2" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex justify-between">
                {appointment.status === 'Pending' && (
                  <>
                    <button 
                      onClick={() => handleEditAppointment(appointment.id)}
                      className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button 
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="flex items-center text-red-500 hover:text-red-700"
                    >
                      <FaTrash className="mr-1" /> Cancel
                    </button>
                  </>
                )}
                {appointment.status !== 'Pending' && (
                  <span className="text-gray-500">No actions available</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyAppoiments;