import { Component } from 'react';
import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';


class ContactForm extends Component{
   nameId = nanoid();
  numberId = nanoid();
  
  state = {
    // contacts:[],
    name: "",
    number:''
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]:value
    })
  console.log(name)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // Коли відбувається handleSubmit нам треба витягти дані з форми
    // const { elements } = e.currentTarget;
console.log(this.state)
    // console.log(e.currentTarget);
    // console.log(e.target);
    // console.log(elements)
  }
  
  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phonebook</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrapper}>
            <label htmlFor={nameId} className={styles.formLabel}>
              Name
            </label>
            <input
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

// const ContactForm = () => {
//   const nameId = nanoid();
//   return (
   
//   );
// };

export default ContactForm;
