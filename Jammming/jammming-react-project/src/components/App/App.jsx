import { useCallback, useState } from 'react';
import Spotify from '../../util/Spotify';

// Components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback(term => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div id='App-main'>
        <SearchBar onSearch={search} />
        <hr />
        <div id='App-cards'>
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </>
  );
}
