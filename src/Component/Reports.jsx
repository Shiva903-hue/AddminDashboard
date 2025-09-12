import { Clock, FileText, UserPlus, Users } from "lucide-react";
import React,{useState} from "react";
import Transaction from "./Reports/Transaction";
import DepostitSlip from "./Reports/DepostitSlip";
import Status from "./Reports/Status";

export default function Reports() {

    const [activeSection, setActiveSection] = useState('transaction_report');

  const menuItems = [
    { id: 'transaction_report', label: 'Transaction Report', icon: UserPlus },
    { id: 'deposite_slip', label: 'Deposite Slip', icon: Clock },
    { id: 'status', label: 'Status', icon: FileText },
  ];
  //Render Content
  const renderContent = ()=>{
    return(<>
     {activeSection === "transaction_report" && <Transaction/>}
     {activeSection === "deposite_slip" && <DepostitSlip/>}
     {activeSection === "status" && <Status/>}
    </>
    )
  }

  return (<div className="min-h-screen bg-gray-50 ">
            {/* Navigation */}
        <nav className="mt-2 p-2 flex border-b-4 border-gray-300">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={` rounded-lg flex items-center p-2 mr-3 text-left  transition-colors duration-200 ${
                  activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-700'
                }`}
              >
                <Icon size={20} className="m-2" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
         <main className=" overflow-y-auto bg-gray-50">
          {renderContent()}
        </main>
      </div>
   

  );
}
