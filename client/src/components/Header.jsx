import SearchBar from './SearchBar';
import LogoLg from '../assets/logo-lg.png';
import LogoSm from '../assets/logo-sm.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <div className='nav-logo'>
          <img src={LogoLg} className='LogoLg' alt='airbnb pic logo' />
          <img src={LogoSm} className='LogoSm' alt='airbnb logo' />
        </div>
        <div className='search-from-lg'>
          <SearchBar />
        </div>
        <h1>Airbnb</h1>
      </nav>
      <div className='search-from-sm'>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
