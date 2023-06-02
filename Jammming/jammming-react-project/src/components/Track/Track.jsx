import PropTypes from 'prop-types';

import './Track.css';

export default function Track({ track }) {
  return (
    <div className='track'>
      <div className='track-information'>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      +
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
};
