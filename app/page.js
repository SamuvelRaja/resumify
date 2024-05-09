'use client'
import React, { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
    txt: ''
    // Add other form fields here
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Handle the response from the backend (optional)
    if (response.ok) {
      console.log('Form data submitted successfully!');
      // Reset the form or display a success message
    } else {
      console.error('Error submitting form:', await response.text());
      // Display an error message to the user
    }
  };

  return (
    <div className="w-full">
        <form onSubmit={handleSubmit} className='mx-auto w-fit'>
            <input type="text" name='txt' className='text-black'  value={formData.value} onChange={handleChange}  />
            <button >yes</button>
        </form>
    </div>
  );
}
