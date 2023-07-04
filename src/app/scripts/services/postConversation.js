import axios from "axios";

export const postConversation = async (url, newConversation) => {
  try {
    const response = await axios.post(url, newConversation);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};