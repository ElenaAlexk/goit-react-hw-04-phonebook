import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={filterId}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          id={filterId}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
