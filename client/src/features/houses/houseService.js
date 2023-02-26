import axios from 'axios';

const API_URL_PUBLIC = '/api/houses/';
const API_URL_PRIVATE = '/api/houses/';

const getAllHouses = async () => {
  const response = await axios.get(API_URL_PUBLIC);

  return response.data;
};

const houseService = {
  getAllHouses,
};

export default houseService;
