import { Component } from 'react';
import { nanoid } from 'nanoid';
// import styles from './phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class Phonebook extends Component {
  state = {
      contacts: [      
      ],
  };

    addContact = data => {
      
        this.setState(({ contacts }) => {
            const newContacts = {
                id: nanoid(),
                ...data,
            };

            return { contacts: [...contacts, newContacts] };
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
