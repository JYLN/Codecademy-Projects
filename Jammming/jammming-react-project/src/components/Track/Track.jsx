import PropTypes from 'prop-types';

import { useCallback } from 'react';
import Button from '../Button/Button';
import './Track.css';

export default function Track({ track, onAdd, isRemoval, onRemove }) {
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderTrackAction = () => {
    return isRemoval ? (
      <Button text='-' onClick={removeTrack} />
    ) : (
      <Button text='+' onClick={addTrack} />
    );
  };

  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderTrackAction()}
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
  onAdd: PropTypes.func,
  isRemoval: PropTypes.bool,
  onRemove: PropTypes.func,
};
