import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const nameInputId = nanoid();

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hundleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  hundleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.nameInputId);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.hundleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={this.state.name}
            onChange={this.hundleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            id={nameInputId}
            value={this.state.number}
            onChange={this.hundleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
