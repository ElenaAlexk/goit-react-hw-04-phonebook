import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <span className={css.spanName}>{name}:</span>
            <span className={css.spanNumber}>{number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
