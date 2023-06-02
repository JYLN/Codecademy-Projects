import { useCallback, useState } from 'react';
import Spotify from '../../util/Spotify';

// Components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback(term => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const updatePlaylistName = useCallback(newName => {
    setPlaylistName(newName);
  }, []);

  const addTrack = useCallback(
    track => {
      if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) return;
      setPlaylistTracks(prev => [...prev, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(track => {
    setPlaylistTracks(prev => prev.filter(curr => curr.id !== track.id));
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div id='App-main'>
        <SearchBar onSearch={search} />
        <hr />
        <div id='App-cards'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </>
  );
}
