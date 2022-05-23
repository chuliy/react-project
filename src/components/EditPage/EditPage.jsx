import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './EditPage.module.css';

import PropTypes from 'prop-types';

export default function EditPage({ onSubmit }) {
  const [requestKey, setRequestKey] = useState('');
  const handleChange = event => {
    setRequestKey(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (requestKey.trim() === '') {
      toast('Введите запрос.');
      return;
    }

    onSubmit(requestKey);
    setRequestKey('');
  };
  return (
    <header className={s.searchbar}>
      <form className={s.searchform} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchform_button}>
          <span className={s.searchform_button_label}>Search</span>
        </button>
        <input
          className={s.searchform_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search items "
          value={requestKey}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
EditPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
