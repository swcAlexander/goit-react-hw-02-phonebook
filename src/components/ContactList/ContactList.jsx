import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactsItem/ContactItem';
import { nanoid } from 'nanoid';
import style from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, removeContact }) => {
  if (contacts)
    return (
      <ul className={style.contactList}>
        {contacts.map(contact => (
          <div className={style.contactListContainer}>
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

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
