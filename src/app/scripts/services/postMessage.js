import axios from "axios";

export const postMessage = async (url, newMessage) => {
  try {
    const response = await axios.post(url, newMessage);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};