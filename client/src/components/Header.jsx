import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import LogoLg from '../assets/logo-lg.png';
import LogoSm from '../assets/logo-sm.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <div className='nav-logo'>
          <Link to='/'>
            <img src={LogoLg} className='LogoLg' alt='airbnb pic logo' />
            <img src={LogoSm} className='LogoSm' alt='airbnb logo' />
          </Link>
        </div>
        <div className='search-from-lg'>
          <SearchBar />
        </div>
        <UserMenu />
      </nav>
      <div className='search-from-sm'>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
