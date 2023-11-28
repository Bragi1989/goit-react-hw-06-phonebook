import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from './redux/contactsSlice';

const ContactList = ({ contacts, handleDeleteContact }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;