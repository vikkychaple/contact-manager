export function getContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return contacts;
  }
  
  export function addContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  
  export function updateContact(updatedContact) {
    const contacts = getContacts();
    const index = contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  
  export function deleteContact(contactId) {
    const contacts = getContacts().filter(contact => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  