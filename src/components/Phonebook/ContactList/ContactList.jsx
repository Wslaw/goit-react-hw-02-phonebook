// import { Component } from 'react';
import React from 'react';
import styles from './contactList.module.css';
// import { nanoid } from 'nanoid';
const ContactList = ({ items }) => {
  const elements = items.map(({ id, name, number }) => {
    <li key={id}>
      Name:{name}. contacts:{number}.
    </li>;
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <ol className={styles.customList}>{elements}</ol>
    </div>
  );
};

export default ContactList;
