import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHouses } from '../features/houses/houseSlice';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import '../styles/Home.css';

const Home = () => {
  const { houses } = useSelector((state) => state.houses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHouses());
  }, [dispatch]);

  if (!houses) {
    return <Spinner />;
  }

  return (
    <section className='products-grid'>
      <div className='cards'>
        {houses.map((house) => (
          <ProductCard key={house._id} house={house} />
        ))}
      </div>
    </section>
  );
};

export default Home;
