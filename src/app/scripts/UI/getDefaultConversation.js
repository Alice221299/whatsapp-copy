import axios from "axios";

export const getDefaultConversation = async () => {
  try {
    const url = "https://back-whatsapp.onrender.com/conversations?idSender=1?_sort=lastMessage&_order=asc";
    const response = await axios.get(url);

    return response
  } catch (error) {
    console.log(error);
  }
};