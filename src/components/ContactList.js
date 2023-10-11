import React from 'react';

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul className="list-group">
        {contacts.map((contact) => (
          <li key={contact.id} className="list-group-item">
            <strong>Name:</strong> {contact.name}<br />
            <strong>Mobile:</strong> {contact.mobile}<br />
            <strong>Email:</strong> {contact.email}<br />
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary btn-sm mx-2 float-end"
              onClick={() => onUpdate(contact.id)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

