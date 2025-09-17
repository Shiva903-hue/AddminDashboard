import React, { useState } from 'react';
import { User, UserPlus, Clock, FileText, Users, Menu, X } from 'lucide-react';
import AdminForm from '../Component/Auth/AdminForm';
import SignUp from '../Component/Auth/Signup';
import PendingApproval from '../Component/PendingApprovle';
import Reports from '../Component/Reports';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('/');

  const menuItems = [
    { id: 'add-admin', label: 'Add Admin', icon: UserPlus },
    { id: 'pending-approval', label: 'Pending Approval', icon: Clock },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'user-manager', label: 'User Manager', icon: Users },
  ];
  
  // Render Main Content
  const renderContent = () => {
    return (
      <>
        {activeSection === "/" && (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to Admin Dashboard</h1>
          </div>
        )}
        {activeSection === "add-admin" && <AdminForm/>}
        {activeSection === "pending-approval" && <PendingApproval />}
        {activeSection === "reports" && <Reports />}
        {activeSection === "user-manager" && <SignUp />}
      </>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 ease-in-out`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className={`${isSidebarOpen ? 'block' : 'hidden'} text-xl font-bold text-gray-800`}>Logo</h1>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 p-3 flex flex-col space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`rounded-lg flex items-center px-4 py-3 text-left transition-colors duration-200  ${
                  activeSection === item.id 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                title={!isSidebarOpen ? item.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'} whitespace-nowrap`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Good Morning</h2>
              <p className="text-sm text-gray-600">Admin Name</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200">
                Admin Profile
              </span>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-200 cursor-pointer">
                <User size={18} className="text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#e6f0ff]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;