import React, { useState } from 'react';

export default function AdminForm() {
  const [formData, setFormData] = useState({
    adm_id: '',
    adm_name: '',
    phone_no: '',
    email: '',
    user_name: '',
    psswd: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5001/api/addminmaster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("✅ Admin Created");
      setFormData({
        adm_id: '',
        adm_name: '',
        phone_no: '',
        email: '',
        user_name: '',
        psswd: '',
      });
    } else {
      alert("❌ Error sending request");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 font-sans">
      <div className="w-full px-4 md:px-12 bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="bg-[#fc7e00] text-white text-center py-4 rounded-t-2xl shadow-md">
          <h1 className="text-3xl font-bold">ADMIN CREATION</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6 pt-2">
          <h2 className="text-center text-[#004aad] text-2xl font-bold mb-6">
            Register Admin Account
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Admin ID', name: 'adm_id', type: 'text' },
              { label: 'Admin Name', name: 'adm_name', type: 'text' },
              { label: 'Phone Number', name: 'phone_no', type: 'tel' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Username', name: 'user_name', type: 'text' },
              { label: 'Password', name: 'psswd', type: 'password' },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label htmlFor={name} className="block mb-2 text-sm font-bold text-[#004aad]">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#004aad] text-white text-base font-semibold rounded-md hover:bg-[#003b99] transition-colors duration-300"
          >
            Create Admin
          </button>
        </form>

        <div className="text-xs text-gray-500 opacity-50 text-right px-6 pb-2">
          Sample Watermark
        </div>
      </div>
    </div>
  );
}