import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleChangeNumber = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      number: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    const lowerCaseName = name ? name.toLowerCase() : '';

    const normalizedContacts = contacts.map((contact) => ({
      ...contact,
      name: contact.name ? contact.name.toLowerCase() : '',
    }));

    if (normalizedContacts.some((contact) => contact.name === lowerCaseName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: Date.now(), name: lowerCaseName, number }));
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <p className={css.contactName}>Name</p>
      <input type="text" name="name" value={name} onChange={handleChange} required />
      <p className={css.contactName}>Number</p>
      <input type="tel" name="number" value={number} onChange={handleChangeNumber} required />
      <button className={css.contactButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;