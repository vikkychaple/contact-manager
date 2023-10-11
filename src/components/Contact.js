import React, { useState } from 'react';

const Contact = ({ contact, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(contact.name);
  const [updatedMobile, setUpdatedMobile] = useState(contact.mobile);
  const [updatedEmail, setUpdatedEmail] = useState(contact.email);

  const handleUpdate = () => {
    onUpdate(contact.id, updatedName, updatedMobile, updatedEmail);
    setIsEditing(false);
  };

  return (
    <div className="mb-3">
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control my-1"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-1"
            value={updatedMobile}
            onChange={(e) => setUpdatedMobile(e.target.value)}
          />
          <input
            type="email"
            className="form-control my-1"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Mobile:</strong> {contact.mobile}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
