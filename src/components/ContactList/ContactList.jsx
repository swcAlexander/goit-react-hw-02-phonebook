import React from 'react';
import { ContactItem } from 'components/ContactList/ContactsItem/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, removeContact }) => {
  if (contacts)
    return (
      <ul>
        {contacts.map(contact => (
          <div key={nanoid(10)}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={nanoid(10)}
            />
            <button type="button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
};
