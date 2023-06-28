import axios from "axios";

export const getMessages = async (url, idLog, idContact) => {
  try {
    const endpoint = "conversations";
    const urlMensajes1 = `${url}${endpoint}?idSender=${idLog}&idResiver=${idContact}`;
    const urlMensajes2 = `${url}${endpoint}?idSender=${idContact}&idResiver=${idLog}`;
    const response1 = await axios.get(urlMensajes1);
    const response2 = await axios.get(urlMensajes2);

    return response1.data.length > 0 ? response1.data : response2.data; //Les va a retornar un array con un elemento.
  } catch (error) {
    console.log(error);
  }
};
