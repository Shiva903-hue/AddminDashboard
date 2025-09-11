import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExcelExport from "./Exports/ExcelExport";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Reports");

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <section id="Dashboard">
      <nav className="bg-white shadow-lg border-b w-full flex gap-3 justify-center p-4">
        <Link
          to="/"
          onClick={() => handleItemClick("Reports")}
        >
          <button
            className={`p-3 border rounded-lg transition-all duration-200 ${
              activeItem === "Reports"
                ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
            }`}
          >
            Reports
          </button>
        </Link>

        <Link
          to="/PendingApprovle"
          onClick={() => handleItemClick("PendingApprovle")}
        >
          <button  className={`p-3 border rounded-lg transition-all duration-200 ${
              activeItem === "PendingApprovle"
                ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
            }`}>
            Pending Approvles
          </button>
        </Link>

       <ExcelExport/>
      </nav>
    </section>
  );
}
