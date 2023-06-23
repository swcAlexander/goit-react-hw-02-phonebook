import React from 'react';

export const Filter = () => {
  return (
    <div>
      {function filterItems(query) {
        return query.filter(function (el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }}
      <label htmlFor="">Find filter by name</label>
      <input type="text" />
    </div>
  );
};
