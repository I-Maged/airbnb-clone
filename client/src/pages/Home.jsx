import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className='products-grid'>
      <div className='cards'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Home;
