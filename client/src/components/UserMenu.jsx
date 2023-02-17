import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import Spinner from './Spinner';
import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/UserMenu.css';

const UserMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target.id !== 'menu-ref') {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='menu-wrapper flex'>
      <h5>Airbnb your home</h5>
      <button
        id='menu-ref'
        className='user-menu flex'
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        <FaBars id='menu-ref' />
        <FaUserCircle id='menu-ref' className='user-icon' />
        <div
          className='user-menu-list'
          style={{ display: !menuOpen && 'none' }}
        >
          {user ? (
            <>
              <p className='signup-tab'>{user.name}</p>
              <p className='signup-tab'>
                <Link className='user-menu-link' to='/'>
                  Account
                </Link>
              </p>
              <p className='signup-tab' onClick={onLogout}>
                Logout
              </p>
              <p className='signup-tab'>
                <Link className='user-menu-link' to='/'>
                  Airbnb your home
                </Link>
              </p>
            </>
          ) : (
            <>
              <h4 className='signup-tab'>
                <Link className='user-menu-link' to='/login'>
                  Log in
                </Link>
              </h4>
              <h4 className='signup-tab'>
                <Link className='user-menu-link' to='/'>
                  Airbnb your home
                </Link>
              </h4>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default UserMenu;
