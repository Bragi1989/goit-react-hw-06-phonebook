import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    handleSubmit(name, number);
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
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