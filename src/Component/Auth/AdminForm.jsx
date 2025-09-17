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

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5001/api/addminmaster" ,{
      method:"POST",
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(formData)
    } );
    if(res.ok){
      alert("✅ Addmin Created");
      setFormData({
    adm_id: '',
    adm_name: '',
    phone_no: '',
    email: '',
    user_name: '',
    psswd: '',
      })
    }else {
      alert("❌ Error sending request");
    }
  }
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Admin ID', name: 'adm_id', type: 'text' },
          { label: 'Admin Name', name: 'adm_name', type: 'text' },
          { label: 'Phone Number', name: 'phone_no', type: 'tel' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Username', name: 'user_name', type: 'text' },
          { label: 'Password', name: 'psswd', type: 'password' },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

