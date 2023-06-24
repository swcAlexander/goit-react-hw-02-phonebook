import React from 'react';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChangeFilter }) => {
  const inputId = nanoid(10);
  return (
    <div>
      <label htmlFor="" id={inputId}>
        Find filter by name
      </label>
      <input type="text" value={value} id={inputId} onChange={onChangeFilter} />
    </div>
  );
};
