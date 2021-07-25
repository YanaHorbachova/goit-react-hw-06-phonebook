import shortid from "shortid";
import types from './phonebook-types';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
      } 
})

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filterContacts = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,

});

export default {addContact, deleteContact, filterContacts};