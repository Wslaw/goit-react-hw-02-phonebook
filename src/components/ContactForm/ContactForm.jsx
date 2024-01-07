import { Component } from 'react';
import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';


class ContactForm extends Component{
   nameId = nanoid();
   numberId = nanoid();
  
  render() {
    const { nameId, numberId } = this;
    return (
      <div className={styles.wrap}>
        <h2 className={styles.title}>Phonebook</h2>
        <form className={styles.form}>
          <div className={styles.wrapper}>
            <label htmlFor={nameId} className={styles.formLabel}>
              Name
            </label>
            <input
              id={nameId}
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter your Name."
            />
            <label htmlFor={numberId} className={styles.formLabel}>
              Number
            </label>
            <input
              id={numberId}
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter your contact"
            />
            <button type="submit" className={styles.btn}>
              Add Contact
            </button>
          </div>
        </form>
        
        <h2 className={styles.title}>Contacts</h2>
      </div>
    );
  }
}

// const ContactForm = () => {
//   const nameId = nanoid();
//   return (
   
//   );
// };

export default ContactForm;
