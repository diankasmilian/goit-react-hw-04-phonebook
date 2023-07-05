import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onAddContact = data => {
    const identicalName = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number === data.number
    );

    const finalContact = {
      ...data,
      id: nanoid(),
    };

    identicalName
      ? alert(`${data.name} or ${data.number} is already in contacts`)
      : this.setState({
          contacts: [...this.state.contacts, finalContact],
        });
  };

  handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    this.setState({
      filter: filterValue,
    });
  };

  componentDidMount() {
    const contact = localStorage.getItem(LS_KEY);
    const parseContact = JSON.parse(contact);
    if (parseContact) {
      this.setState({
        contacts: parseContact,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
          filter={this.state.filter}
        />
        <ContactList
          filterContacts={filterContacts}
          onRemoveContact={this.onRemoveContact}
        />
      </Container>
    );
  }
}

export default App;
