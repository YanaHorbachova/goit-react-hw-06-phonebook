import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/phonebook/phonebook-action";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const getVisibleContact  = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({text}) =>
  text.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContact (items, filter),

});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.filterContacts( e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};