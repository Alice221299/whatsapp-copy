import { getMessages } from "../services/getMessages.js";
import { patchMessage } from "../services/patchMessage.js";
import { DateTime } from "luxon";
const URL = "https://back-whatsapp.onrender.com/";

export const sendMessage = async () => {
    const messageInput = document.getElementById('message-input')

    const idContact = localStorage.getItem('idContact');
    const idLog = parseInt(localStorage.getItem('userId'));
    const messageListArray = await getMessages(URL, idLog, idContact);
    console.log("Conversation:", messageListArray);
    const messageList = messageListArray[0].messages
    console.log(messageList);
    const idConversation = messageListArray[0].id
    console.log(idConversation);
    const url_messages = `${URL}conversations/${idConversation}`
    
    const idMessage = messageList.length + 1;

    const newMessage = {
      id: idMessage,
      sentBy: idLog,
      time: DateTime.now(),
      message: messageInput.value,
      flag: false,
    };
    messageList.push(newMessage)
    const payload = {
      idSender: idLog,
      idReceiver: idContact,
      id: idConversation,
      messages: messageList,
    };
    console.log("newArrayMessages", messageListArray);

    await patchMessage(url_messages, payload)
}