import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

export default function SearchResults({ searchResults }) {
  return (
    <div className='card search-results'>
      <h2>Results</h2>
      <TrackList tracks={searchResults} />
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};
