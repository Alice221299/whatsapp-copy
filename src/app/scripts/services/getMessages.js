import axios from "axios";

export const getMessages = async (url, idUser2) => {
    try {
      const endpoint = "conversations";
      const {data} = await axios.get(`${url}${endpoint}/${idUser2}`);
      return data
    } catch (error) {
      console.log(error);
    }
  };