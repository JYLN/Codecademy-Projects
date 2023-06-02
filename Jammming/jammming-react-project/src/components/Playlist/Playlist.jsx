import Button from '../Button/Button';
import TrackList from '../TrackList/TrackList';

import './Playlist.css';

export default function Playlist() {
  return (
    <div className='card playlist'>
      <input defaultValue={'New Playlist'} />
      <TrackList />
      <Button />
    </div>
  );
}
