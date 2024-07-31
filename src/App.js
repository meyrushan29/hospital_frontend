import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import AmbulanceBooking from './Pages/Ambulance/AmbulanceBooking';
import Appointments from './Pages/Appoiments/Appoiments';
import MyAppoiments from './Pages/Appoiments/MyAppoiments';
import Find_Doctor from './Pages/Doctors/Find_Doctor';
import Mytickets from './Pages/ContactUs/Mytickets';
import TicketRise from './Pages/ContactUs/TicketRise';
import LabBooking from './Pages/Labs/LabBooking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/amb_Booking" element={<AmbulanceBooking />} /> 
            <Route path="/appoiments" element={<Appointments />} />
            <Route path="/my-appoiments" element={<MyAppoiments />} />
            <Route path="/find-doc" element={<Find_Doctor />} />
            <Route path="/myTicket" element={<Mytickets />} />
            <Route path="/ticket_rise" element={<TicketRise />} />
            <Route path="/lab_Booking" element={<LabBooking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;