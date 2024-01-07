// import { Component } from 'react';
import React from 'react';
import styles from './contactList.module.css';
// import { nanoid } from 'nanoid';
const ContactList = ({items}) => {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contacts</h2>
        <ol className={styles.customList}>
          <li>Name-1</li>
          <li>Name-2</li>
          <li>Name-3</li>
        </ol>
      </div>
    );
}


export default ContactList;
