const errorMessage = (error) => {
  return error.response?.data?.message || error.message || error.toString();
};

export default errorMessage;
