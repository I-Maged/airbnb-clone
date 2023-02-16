import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return <div>{user ? <h1>Welcome {user.name}</h1> : <h1>HomePage</h1>}</div>;
};

export default Home;
