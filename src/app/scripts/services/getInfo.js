import axios from "axios";

export const getInfo = async (url) => {
    try {
      const {data} = await axios.get(url);
      return data
    } catch (error) {
      console.log(error);
    }
  };