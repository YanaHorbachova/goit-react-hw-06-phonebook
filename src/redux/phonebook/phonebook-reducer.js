import { combineReducers } from 'redux';
import types from './phonebook-types';

const itemsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const itemsReducer = (state = [itemsInitialState], { type, payload }) => {
    switch (type) {
        case types.ADD: 
        return [payload, ...state];

        case types.DELETE:
        return state.filter(
            (contact) => contact.id !== payload);

        default: 
        return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
        return payload

        default: 
        return state;
    }
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
  });
  
  export default contactsReducer;