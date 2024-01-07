// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React from "react";
import { Component } from "react";
// import styles from './ContactForm/contactForm.module.css'
import ContactForm from './ContactForm/ContactForm'

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    
    return (
      <ContactForm />
      
    );
  }
}