import React from 'react';
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
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter query={this.contacts} />
        <ContactList />
      </Container>
    );
  }
}
