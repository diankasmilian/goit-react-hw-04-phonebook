import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

const LS_KEY = 'contacts';
const data = JSON.parse(localStorage.getItem(LS_KEY));

const App = () => {
  const [contacts, setContacts] = useState(data ?? []);
  const [filter, setFilter] = useState('');

  const onAddContact = (name, number) => {
    const sameName = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    const findContact = {
      id: nanoid(),
      name,
      number,
    };

    sameName
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([...contacts, findContact]);
  };

  const onRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    setFilter(filterValue);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactList
        filterContacts={filterContacts}
        onRemoveContact={onRemoveContact}
      />
    </Container>
  );
};

export default App;
