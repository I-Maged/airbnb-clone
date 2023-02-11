import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/UserMenu.css';

const UserMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target.id !== 'menu-ref') {
        setMenuOpen(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
  }, []);

  return (
    <div className='menu-wrapper flex'>
      <h5>Airbnb your home</h5>
      <div
        id='menu-ref'
        className='user-menu'
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        <div className='user-menu-icons flex' id='menu-ref'>
          <FaBars id='menu-ref' />
          <FaUserCircle id='menu-ref' className='user-icon' />
        </div>
        <div
          className='user-menu-list'
          style={{ display: !menuOpen && 'none' }}
        >
          <div id='menu-ref'>Log in</div>
          <div id='menu-ref'>Airbnb your home</div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;