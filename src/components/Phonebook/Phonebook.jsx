import { Component } from "react";
import { nanoid } from "nanoid";
import styles from './phonebook.module.css';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


class Phonebook extends Component{


    state = {
        contacts: [
            {id: nanoid(),
                name: "",
        number:'',}
        ],
        
    }
    render() {
        const { contacts } = this.state;

        return (
          <div>
            <ContactForm />
            <ContactList items={contacts} />
          </div>
        );
    }
}

export default Phonebook;