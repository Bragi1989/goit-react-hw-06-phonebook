import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from './redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul key="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;  