import React from 'react';

export const ContactItem = ({ id, name, number }) => {
  return (
    <li id={id}>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};
