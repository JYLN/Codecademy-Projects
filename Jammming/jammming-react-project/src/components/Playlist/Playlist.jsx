import PropTypes from 'prop-types';
import Button from '../Button/Button';
import TrackList from '../TrackList/TrackList';

import { useCallback } from 'react';
import './Playlist.css';

export default function Playlist({ playlistName, playlistTracks, onNameChange, onRemove }) {
  const handleNameChange = useCallback(
    event => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className='card playlist'>
      <input onChange={handleNameChange} defaultValue={playlistName} />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <Button btn={true} text='Save Playlist' />
    </div>
  );
}

Playlist.propTypes = {
  playlistName: PropTypes.string,
  playlistTracks: PropTypes.array,
  onNameChange: PropTypes.func,
  onRemove: PropTypes.func,
};
