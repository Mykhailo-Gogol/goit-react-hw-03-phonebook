import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import contacts from "./data/contacts.json";

class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  componentDidMount() {
    const localStorageCantactsArray = localStorage.getItem("contacts");
    this.setState({
      contacts: JSON.parse(localStorageCantactsArray)
        ? JSON.parse(localStorageCantactsArray)
        : this.state.contacts,
    });
  }

  componentDidUpdate() {
    const contactsToLocalStorage = JSON.stringify(this.state.contacts);
    localStorage.setItem("contacts", contactsToLocalStorage);
  }

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some((e) => e.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [...contacts, { name, number, id: shortid.generate() }],
        };
      });
    }
  };

  filterHandler = (event) => {
    this.setState(() => ({
      filter: event.target.value,
    }));
  };

  deleteUserHandler = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const filteredContacts = () => {
      const { filter, contacts } = this.state;
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
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onFilter={this.filterHandler} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteUserHandler}
        />
      </div>
    );
  }
}

export default App;
