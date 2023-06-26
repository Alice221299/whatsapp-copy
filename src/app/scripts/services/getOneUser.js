import axios from "axios";

export const getOneUser = async (url, idUser) => {
    try {
      const endpoint = "users";
      const {data} = await axios.get(`${url}${endpoint}/${idUser}`);
      return data
    } catch (error) {
      console.log(error);
    }
  };