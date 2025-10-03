import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  User,
  Calendar,
  FileText,
  Hash,
  PaintBucket,
  ReceiptIndianRupeeIcon,
  ScaleIcon,
} from "lucide-react";

export default function VoucherCard({ voucherData, onApprove, onReject }) {
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Define the base URL consistently for the backend update endpoint
  // const API_ENDPOINT = "http://localhost:5001/up/request";

  //? --- RENDERING CONDITION: Only show card if status is PENDING ---
  if (voucherData.v_status && voucherData.v_status !== 'PENDING' && !isDisappearing) {
      return null;
  }
  //* HANDLE APPROVE
  const handleApprove = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const payload = {
      v_status: 'APPROVED', 
      v_sysdate: new Date().toISOString(),
    };

    try {
  
      const response = await fetch(`http://localhost:5001/up/request/${voucherData.va_id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Start disappearance animation 
      setIsDisappearing(true);
      
      // Notify parent component to logically remove/filter the card after animation
      setTimeout(() => {
        onApprove(voucherData.va_id); 
      }, 300);
      
    } catch (error) {
      console.error("Error approving voucher:", error);
      setIsProcessing(false);
    }
  };

//! HANDLE REJECT
  const handleReject = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const payload = {
      v_status: 'REJECTED', 
      v_sysdate: new Date().toISOString(),
    };
    
    try {
      const response = await fetch(`http://localhost:5001/up/request/${voucherData.va_id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Start disappearance animation
      setIsDisappearing(true);
      
      // Notify parent component to logically remove/filter the card after animation
      setTimeout(() => {
        onReject(voucherData.va_id);
      }, 300);
      
    } catch (error) {
      console.error("Error rejecting voucher:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl ${
        isDisappearing
          ? "opacity-0 scale-95 translate-y-2"
          : "opacity-100 scale-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Voucher id */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <Hash className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 truncate">
                Voucher ID
              </p>
              <p className="text-base font-semibold text-gray-900 truncate">
                {voucherData.va_id}
              </p>
            </div>
          </div>

          {/* User Email */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <User className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 truncate">
                User Email
              </p>
              <p className="text-base font-semibold text-gray-900 truncate">
                {voucherData.u_email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Vender Name */}
        <div className="flex items-center space-x-3 mb-2 pb-2 ">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <FileText className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 truncate">
              Vendor Name
            </p>
            <p className="text-base font-semibold text-gray-900 truncate">
              {voucherData.vender_name}
            </p>
          </div>
        </div>

        {/* Voucher Date */}
        <div className="flex items-center space-x-3 mb-2 pb-2 ">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Calendar className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Date
            </p>
            <p className="text-base font-medium text-gray-900">
              {new Date(voucherData.v_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Product/Item Details*/}
      <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
        Product Details
      </h3>
      <div className="space-y-4 mb-6">
        {/* P-name */}
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <FileText className="w-4 h-4 text-orange-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Item Name
            </p>
            <p className="text-base font-semibold text-gray-900">
              {voucherData.p_name}
            </p>
          </div>
        </div>

        {/* Qty, Rate,*/}
        <div className="grid grid-cols-2 gap-4">
          {/* Quantity */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <PaintBucket className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Quantity
              </p>
              <p className="text-base font-semibold text-gray-900">
                {voucherData.P_quantity}
              </p>
            </div>
          </div>

          {/* Rate */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <ScaleIcon className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Rate
              </p>
              <p className="text-base font-semibold text-gray-900">
                {voucherData.p_rate
                  ? voucherData.p_rate.toLocaleString("en-IN")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Amount  */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
          <div className="p-2 bg-red-50 rounded-lg">
            <ReceiptIndianRupeeIcon className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">
              Total Amount
            </p>
            <p className="text-xl font-bold text-red-700">
              ₹{" "}
              {voucherData.P_amount
                ? voucherData.P_amount.toLocaleString("en-IN")
                : "0.00"}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-100">
        <button
          onClick={handleApprove}
          disabled={isProcessing}
          className="flex-1 flex justify-center items-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing..." : "APPROVE"}
        </button>

        <button
          onClick={handleReject}
          disabled={isProcessing}
          className="flex-1 flex justify-center items-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
        >
          <XCircle className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing..." : "REJECT"}
        </button>
      </div>
    </div>
  );
}
