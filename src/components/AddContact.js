import React, { useState } from 'react';

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleAdd = () => {
    // Clear previous errors
    setNameError('');
    setMobileError('');
    setEmailError('');

    // Validate the name, mobile, and email
    if (name.trim() === '' || !isNaN(name)) {
        setNameError('Name is required and cannot be a number');
        return;
      }

    if (mobile.trim() === '' || !/^\d{10}$/.test(mobile)) {
      setMobileError('Mobile number must be 10 digits');
      return;
    }

    if (email.trim() === '' || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // If validation passes, add the new contact
    onAdd({ name, mobile, email });
    setName('');
    setMobile('');
    setEmail('');
  };
  const formStyle = {
    backgroundColor: '#e0e0e0', // Set your desired background color
    padding: '20px', // Add padding for spacing
  };

  return (
    <div>
      <h2 className="mb-4">Add Contact</h2>
      <div style={formStyle} className="mb-3">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Enter Name to be Added"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="text-danger">{nameError}</p>}

        <input
          type="text"
          className="form-control my-1"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {mobileError && <p className="text-danger">{mobileError}</p>}

        <input
          type="email"
          className="form-control my-1"
          placeholder="Enter Valid Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-danger">{emailError}</p>}
      </div>
      <button className="btn btn-success" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
