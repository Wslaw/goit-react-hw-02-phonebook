import { Component } from 'react';
import { nanoid } from 'nanoid';
// import styles from './phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

    isDublicate({ name, number }) {
        const { contacts } = this.state;
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();

        const dublicate = contacts.find(item => {
          const normalizedCurrentName = item.name.toLowerCase();
          const normalizedCurrentNumber = item.number.toLowerCase();

          return (
            normalizedCurrentName === normalizedName &&
            normalizedCurrentNumber === normalizedNumber
          );
        })
        return Boolean(dublicate);
    }
    addContact = data => {
        //   console.log(data)
        // const { name, number } = data;
        
        if (this.isDublicate(data)) {
            return alert(`This contact ${data.name}: ${data.number} is already in the book`);
        }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };

      return { contacts: [...contacts, newContact] };
    });
  };

  render() {
    const { contacts } = this.state;
    const { addContact } = this;

    return (
      <div>
        <ContactForm onSubmit={addContact} />
        <ContactList items={contacts} />
      </div>
    );
  }
}

export default Phonebook;
