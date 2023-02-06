import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={Logo1} className='logo1' alt='airbnb pic logo' />
        <img src={Logo2} className='logo2' alt='airbnb logo' />
      </div>
      <h1>Airbnb</h1>
    </div>
  );
};

export default Navbar;
