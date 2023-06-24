import React from 'react';
import style from 'components/ContactList/ContactsItem/ContactItem.module.css';

export const ContactItem = ({ name, number }) => {
  return (
    <li className={style.contactItem}>
      <span className={style.contactName}>{name}:</span>
      <span className={style.contactNumber}>{number}</span>
    </li>
  );
};
