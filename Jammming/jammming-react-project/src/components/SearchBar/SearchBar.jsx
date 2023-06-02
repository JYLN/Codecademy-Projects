import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Button from '../Button/Button';

import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback(event => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
    setTerm('');
  }, [onSearch, term]);

  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Search for a song'
        onChange={handleTermChange}
        value={term}
      />
      <Button text='Search' onClick={search} btn={true} />
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
