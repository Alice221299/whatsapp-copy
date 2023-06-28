import axios from "axios";

export const getMessages = async (url, idLog, idContact) => {
  try {
    const endpoint = "conversations";
    const urlMessages1 = `${url}${endpoint}?idSender=${idLog}&idReceiver=${idContact}`;
    const urlMessages2 = `${url}${endpoint}?idSender=${idContact}&idReceiver=${idLog}`;
    const response1 = await axios.get(urlMessages1);
    const response2 = await axios.get(urlMessages2);

    return response1.data.length > 0 ? response1.data : response2.data; //Les va a retornar un array con un elemento.
  } catch (error) {
    console.log(error);
  }
};
