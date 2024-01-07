import React from "react";
// import { Component } from "react";
import styles from './ContactForm/contactForm.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";

export const App = () => {
  return (
    <div className={styles.App}>     
      <ContactForm />
      <ContactList />
    </div>
  );
};


// export class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   render() {
    
//     return (
//     <>
//          <ContactForm />
     
//     </>
     
      
//     );
//   }
// }