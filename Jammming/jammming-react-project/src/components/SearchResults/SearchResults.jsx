import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

export default function SearchResults({ searchResults, onAdd, loading }) {
  return (
    <div className='card search-results'>
      <div className='card-header'>
        <h2>Results</h2>
        {loading && <Spinner />}
      </div>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onAdd: PropTypes.func,
  loading: PropTypes.bool,
};
