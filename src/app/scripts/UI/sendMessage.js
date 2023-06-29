import { getMessages } from "../services/getMessages.js";
import { postMessage } from "../services/postMessage.js";
const URL = "https://back-whatsapp.onrender.com/";
const messageInput = document.getElementById('message-input')

export const sendMessage = async () => {
    const idContact = localStorage.getItem('idContact');
    const idLog = localStorage.getItem('userId');
    const messageListArray = await getMessages(URL, idLog, idContact);
    const messageList = messageListArray[0].messages
    const url_messages = `${URL}${messageListArray[0].id}`
    
    const id = messageList.length + 1;

    const newMessage = {
      id: id,
      sentBy: idLog,
      time: DateTime.now(),
      message: messageInput.value,
      flag: false,
    };

    postMessage(url, newMessage)
}