import React, { useState, useEffect } from 'react';

import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { getContacts, addContact, updateContact, deleteContact } from './utils/localStorage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load contacts from local storage when the component mounts
    setContacts(getContacts());
  }, []);

  const handleAddContact = (newContact) => {
    // Assign a unique ID to the new contact
    newContact.id = Date.now();
    
    // Add the new contact to the state and local storage
    addContact(newContact);
    setContacts(getContacts());
  };

  const handleUpdateContact = (contactId, updatedName, updatedMobile, updatedEmail) => {
    // Update an existing contact in the state and local storage
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === contactId) {
        return {
          ...contact,
          name: updatedName,
          mobile: updatedMobile,
          email: updatedEmail,
        };
      }
      return contact;
    });

    updateContact({ id: contactId, name: updatedName, mobile: updatedMobile, email: updatedEmail });
    setContacts(updatedContacts);
    setSelectedContact(null); // Clear the selected contact for editing
  };

  const handleDeleteContact = (contactId) => {
    // Delete a contact from the state and local storage
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    deleteContact(contactId);
    setContacts(updatedContacts);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const appStyle = {
    backgroundColor: 'grey', // Set your desired background color
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
    padding: '20px', // Add padding for spacing
  };

  return (
    <div style={appStyle} className="container mt-4 ">
      
      <h1 className="text-center mb-4">Contact<span style={{ color: 'orange' }}> Manager</span></h1>
      <div className="row">
      
        <div className="col-6">
        <SearchBar onSearch={handleSearch} />
          <ContactList 
            //contacts={contacts}
            contacts={filteredContacts}
            onDelete={handleDeleteContact}
            onUpdate={(contactId) => setSelectedContact(contactId)}
          />
        </div>
        <div className="col-6 border p-4 mb-3">
          <AddContact onAdd={handleAddContact} />
          {selectedContact !== null && (
            <Contact
              contact={contacts.find((c) => c.id === selectedContact)}
              onUpdate={handleUpdateContact}
              onDelete={handleDeleteContact}
            />
          )}
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;
