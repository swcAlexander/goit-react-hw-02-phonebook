import React from 'react';

export const ContactItem = ({ name, number }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};
