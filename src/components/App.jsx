import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './Contacts.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  //componentDidMount() {.
  //const contactsSaved = localStorage.getItem('contacts');
  //const parsedContacts = JSON.parse(contactsSaved);
  //if (parsedContacts !== null) {
  //this.setState({ contacts: parsedContacts });
  //}
  //}

  //componentDidUpdate(prevProps, prevState) {
  //if (this.state.contacts !== prevState.contacts) {
  //console.log('обновились контакты');
  //localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //}
  //}

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name}: is already in contacts`)
      : setContacts(({ contacts }) => {
          return {
            contacts: [newContact, ...contacts],
          };
        });
  };

  const deleteContact = contactId => {
    //this.setState(prevState => {
    //return {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    //contacts: prevState.contacts.filter(
    //contact => contact.id !== contactId
    //),
    //};
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const getVisibleContacts = () => {
    //const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //const visibleContacts = this.getVisibleContacts();
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        deleteContact={deleteContact}
        contacts={getVisibleContacts}
      />
    </div>
  );
};
