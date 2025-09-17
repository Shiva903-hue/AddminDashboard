import React, { useState, useEffect } from "react";
import VoucherCard from "./Card/VoucherCard";
import { CheckCircle, RefreshCw } from 'lucide-react';

export default function PendingApproval() {
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [datalength , setDatalength] = useState(0)

  // Fetch vouchers from server
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/requests");
      const data = await res.json();
      setDatalength(data.length);
      setVouchers(data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = (voucherId) => {
    setVouchers(prev => prev.filter(voucher => voucher.voucherId !== voucherId));
  };

  const handleReject = (voucherId) => {
    setVouchers(prev => prev.filter(voucher => voucher.voucherId !== voucherId));
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading vouchers...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Total Pending Approvals:- {datalength}</h1>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw 
            className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} 
          />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {/* Voucher Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vouchers.map((voucher) => (
          <VoucherCard
            key={voucher.voucherId}
            voucherData={voucher}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>

      {/* Empty State */}
      {vouchers.length === 0 && (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <p className="text-gray-500 text-lg">No requests</p>
        </div>
      )}
    </div>
  );
}