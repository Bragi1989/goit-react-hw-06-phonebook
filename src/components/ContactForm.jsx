import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact({ id: Date.now(), name: name.toLowerCase(), number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <p className={css.contactName}>Name</p>
      <input type="text" name="name" value={name} onChange={handleChange} required />
      <p className={css.contactName}>Number</p>
      <input type="tel" name="number" value={number} onChange={handleChange} required />
      <button className={css.contactButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;       