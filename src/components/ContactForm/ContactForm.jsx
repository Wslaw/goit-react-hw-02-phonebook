// import { Component } from 'react';
import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          className={styles.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your Name."
        />
        <button type="submit" className={styles.btn}>
          Add Name
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
