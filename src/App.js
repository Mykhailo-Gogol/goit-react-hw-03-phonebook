import "./App.css";
import { useState, useEffect } from "react";
import shortid from "shortid";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import data from "./data/contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localStorageCantactsArray = localStorage.getItem("contacts");
    setContacts(
      JSON.parse(localStorageCantactsArray)
        ? JSON.parse(localStorageCantactsArray)
        : contacts
    );
  }, []);

  useEffect(() => {
    const contactsToLocalStorage = JSON.stringify(contacts);
    localStorage.setItem("contacts", contactsToLocalStorage);
  });

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      setContacts([...contacts, { name, number, id: shortid.generate() }]);
    }
  };

  const filterHandler = (value) => {
    setFilter(value);
  };

  const deleteUserHandler = (contactId) => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredArray = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
    return filteredArray;
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onFilter={filterHandler} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteUserHandler}
      />
    </div>
  );
};

export default App;
