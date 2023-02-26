import { FaArrowRight } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ house }) => {
  return (
    <div className='card'>
      <div className='card-image-container'>
        <img
          alt='house'
          src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
        />
      </div>
      <div className='card-content'>
        <p className='card-title'>{house.description}</p>
        <p className='card-title'>{house.location}</p>
        <div className='card-info'>
          <p className='card-text'>{house.price}</p>
          <p className='card-price'>
            Book <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
