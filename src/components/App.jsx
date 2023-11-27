import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from './redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      dispatch(addContact(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  const handleSubmit = (name, number) => {
    const normalizedContacts = contacts.map((contact) => ({
      ...contact,
      name: contact.name ? contact.name.toLowerCase() : '',
    }));

    const lowerCaseName = name ? name.toLowerCase() : '';

    if (normalizedContacts.some((contact) => contact.name === lowerCaseName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: Date.now(), name: lowerCaseName, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList contacts={filteredContacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;