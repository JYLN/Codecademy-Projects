// Components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
  return (
    <>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div id='App-main'>
        <SearchBar />
        <hr />
        <div id='App-cards'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  );
}
