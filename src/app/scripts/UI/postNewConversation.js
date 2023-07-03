import { postConversation } from "../services/postConversation.js";
import { getInfo } from "../services/getInfo.js";
import { DateTime } from "luxon";


export const postNewConversation = async () => {
    const messageInput = document.getElementById('message-input')
    const messageList = []
    const idContact = localStorage.getItem('idContact');
    const idLog = parseInt(localStorage.getItem('userId'));
    const URL = "https://back-whatsapp.onrender.com/conversations";
    const conversationsArray = await getInfo(URL);
    
    const idConversation = conversationsArray.length + 1;

    const newMessage = {
      id: 1,
      sentBy: idLog,
      time: DateTime.now(),
      message: messageInput.value,
      flag: false,
    };
    const newConversation = {
      idSender: idLog,
      idReceiver: idContact,
      id: idConversation,
      messages: messageList,
    };

    messageList.push(newMessage)


    await postConversation(URL, newConversation)
}