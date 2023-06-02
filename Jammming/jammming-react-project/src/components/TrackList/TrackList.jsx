import PropTypes from 'prop-types';
import Track from '../Track/Track';

import './TrackList.css';

export default function TrackList({ tracks, onAdd, isRemoval, onRemove }) {
  return (
    <div className='track-list'>
      {tracks.map(track => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func,
  isRemoval: PropTypes.bool,
  onRemove: PropTypes.func,
};
