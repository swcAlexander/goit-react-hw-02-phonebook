import React from 'react';
import { ContactItem } from 'components/ContactList/ContactsItem/ContactItem';
import { nanoid } from 'nanoid';

const id = nanoid(10);

export const ContactList = contacts => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem name={contact.name} number={contact.number} id={id} />
      ))}
    </ul>
  );
};
