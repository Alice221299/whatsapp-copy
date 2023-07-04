import { getMessages } from "../services/getMessages.js";
import { patchMessage } from "../services/patchMessage.js";
import { DateTime } from "luxon";
import { URL_users } from "./data-variables.js";

export const sendMessage = async () => {
    const messageInput = document.getElementById('message-input')

    const idContact = parseInt(localStorage.getItem('idContact'));
    const idLog = parseInt(localStorage.getItem('userId'));
    const messageListArray = await getMessages(URL_users, idLog, idContact);
    const messageList = messageListArray[0].messages
    const idConversation = messageListArray[0].id
    const url_messages = `${URL_users}conversations/${idConversation}`
    
    const idMessage = messageList.length + 1;

    const newMessage = {
      id: idMessage,
      sentBy: idLog,
      time: DateTime.now().toISO(),
      message: messageInput.value,
      flag: false,
    };
    messageList.push(newMessage)
    const payload = {
      idSender: idLog,
      idReceiver: idContact,
      id: idConversation,
      lastMessage: DateTime.now().toISO(),
      messages: messageList,
    };

    await patchMessage(url_messages, payload)
}