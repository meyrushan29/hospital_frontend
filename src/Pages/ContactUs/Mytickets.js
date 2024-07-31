import React from 'react';

const MyTickets = () => {
  // Sample data - replace this with your actual data source
  const tickets = [
    { id: 1, name: 'John Doe', email: 'john@example.com', question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', question: 'Where can I find my invoice?', answer: 'Your invoices are available in the "Billing" section of your account dashboard.' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', question: 'Is there a mobile app?', answer: 'Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.' },
  ];

  return (
    <div className="container mt-20  p-4 bg-gray-100 h-screen ">
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Tickets</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Ticket #{ticket.id}
                  </span>
                   
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="mt-1 text-sm text-gray-900">{ticket.name}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-sm text-gray-900">{ticket.email}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Question</p>
                  <p className="mt-1 text-sm text-gray-900">{ticket.question}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Answer</p>
                  <p className="mt-1 text-sm text-gray-900">{ticket.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyTickets;