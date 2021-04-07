import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Name"
              onChange={this.handleInputChange}
              name="name"
              value={this.state.name}
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor="number">
            <input
              type="tel"
              placeholder="Number"
              onChange={this.handleInputChange}
              name="number"
              value={this.state.number}
              id="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
