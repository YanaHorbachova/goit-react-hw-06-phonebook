import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsActions from "../../redux/phonebook/phonebook-action";
import styles from "./ContactList.module.css";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={styles.btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items

});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: 
  (id) => dispatch (contactsActions.deleteContact(id))

});

export default connect(mapStateToProps,mapDispatchToProps)(ContactsList);


ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
