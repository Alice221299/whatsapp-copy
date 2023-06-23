import axios from "axios";

export const getUsers = async (url) => {
    try {
      const endpoint = "users";
      const {data} = await axios.get(`${url}${endpoint}`);
      return data
    } catch (error) {
      console.log(error);
    }
  };