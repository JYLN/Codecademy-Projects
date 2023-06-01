import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className='searchbar'>
      <input type='text' placeholder='Search for a song' />
      <button>Search</button>
    </div>
  );
}
