import React, { Component } from "react";
import { connect } from "react-redux";
import contactActions from '../../redux/phonebook/phonebook-action'
import styles from "./ContactForm.module.css";


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            onChange={this.handleChange}
            value={number}
            name="number"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => dispatch(contactActions.addContact(value))
})

export default connect(null,mapDispatchToProps)(ContactForm);
