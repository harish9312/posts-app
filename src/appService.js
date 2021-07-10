import axios from "axios";
export const getData = async () => {
  const response = await axios.get(
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e"
  );
  return response;
};
