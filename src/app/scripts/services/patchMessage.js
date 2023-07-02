import axios from "axios";

export const patchMessage = async (url, newMessage) => {
  try {
    const response = await axios.patch(url, newMessage);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};