import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

export default function SearchResults() {
  return (
    <div className='card search-results'>
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}
