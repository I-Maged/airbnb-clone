import axios from 'axios';

const API_URL_PUBLIC = '/api/houses/';
const API_URL_PRIVATE = '/api/houses/';

const getAllHouses = async () => {
  const response = await axios.get(API_URL_PUBLIC);

  return response.data;
};

const createHouse = async (houseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL_PRIVATE}/user`,
    houseData,
    config
  );

  return response.data;
};

const houseService = {
  getAllHouses,
  createHouse,
};

export default houseService;
