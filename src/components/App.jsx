import React from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends React.Component {
  static propTypes = {
    // тут описуємо пропи
  };
  // state = {
  //     value: this.props.initialValue,
  // }
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // toggleComplited = contactFormId => {
  //   console.log(contactFormId);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.map(contact => {
  //       if (contact.id !== contactFormId)
  //         return {
  //           ...contact, this.state
  //         };
  //     }),
  //   }));
  // };

  render() {
    const filteredContacts = this.onFilteredContacts();
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        ) : (
          alert('Your phonebook is empty. Add first contact!')
        )}
        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </Container>
    );
  }
}
