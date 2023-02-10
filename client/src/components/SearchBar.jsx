import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [place, setPlace] = useState('Anywhere');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(place);
  };

  return (
    <form onSubmit={onSubmit} className='search-form flex'>
      <div className='form-group-primary'>
        <select
          name='place'
          id='place'
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className='search-input-primary'
        >
          <option value='Anywhere'>Anywhere</option>
          <option value='Cairo'>Cairo</option>
          <option value='Hurghada'>Hurghada</option>
          <option value='Sharm El-Sheikh'>Sharm El-Sheikh</option>
        </select>
      </div>
      <div className='form-group-primary'>
        <input
          type='text'
          name='anyweek'
          id='anyweek'
          className='search-input-primary'
          placeholder='Any week'
        />
      </div>
      <div className='form-group-secondary'>
        <input
          type='number'
          name='guests'
          id='guests'
          className='search-input-secondary'
          placeholder='Add guests'
        />
      </div>
      <button type='submit' className='form-btn'>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
