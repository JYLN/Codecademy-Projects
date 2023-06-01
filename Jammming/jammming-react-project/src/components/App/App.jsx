// Components
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  return (
    <>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div id='App-main'>
        <SearchBar />
        <div id='App-cards'></div>
      </div>
    </>
  );
}
