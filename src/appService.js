import axios from "axios";
export const getData = async (id) => {
  const response = await axios.get(`https://www.mocky.io/v2/${id}`);
  return response;
};
