import { FaSearch } from 'react-icons/fa';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import '../styles/Header.css';

const Header = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
  };

  return (
    <nav>
      <div className='nav-logo'>
        <img src={Logo1} className='logo1' alt='airbnb pic logo' />
        <img src={Logo2} className='logo2' alt='airbnb logo' />
      </div>
      <form onSubmit={onSubmit} className='search-form'>
        <div className='form-group-primary'>
          <input
            type='text'
            name='anywhere'
            id='anywhere'
            className='search-input-primary'
            placeholder='Anywhere'
          />
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
      <h1>Airbnb</h1>
    </nav>
  );
};

export default Header;
