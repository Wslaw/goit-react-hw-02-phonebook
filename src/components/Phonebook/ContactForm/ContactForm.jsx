import { Component } from 'react';
import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    console.log(name);
  };

  handleSubmit = e => {
    e.preventDefault();
    // Коли відбувається handleSubmit нам треба витягти дані з форми
    // const { elements } = e.currentTarget;  
    this.reset();
  };
  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    const { name, number } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phonebook</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrapper}>
            <label htmlFor={nameId} className={styles.formLabel}>
              Name
            </label>
            <input
              value={name}
              onChange={handleChange}
              id={nameId}
              className={styles.input}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              placeholder="Enter your Name."
            />
            <label htmlFor={numberId} className={styles.formLabel}>
              Number
            </label>
            <input
              value={number}
              onChange={handleChange}
              id={numberId}
              className={styles.input}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
              placeholder="Enter your contact"
            />
            <button type="submit" className={styles.btn}>
              Add Contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default ContactForm;
