import PropTypes from 'prop-types';
import Track from '../Track/Track';

import './TrackList.css';

export default function TrackList({ tracks }) {
  return (
    <div className='track-list'>
      {tracks.map(track => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
};
