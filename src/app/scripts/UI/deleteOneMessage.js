import { getMessages } from "../services/getMessages.js";
import { patchMessage } from "../services/patchMessage.js";
import { URL_users } from "./data-variables.js";

export const deleteMessage = async (idMessage) => {
    const idContact = localStorage.getItem('idContact');
    const idLog = parseInt(localStorage.getItem('userId'));
    const messageListArray = await getMessages(URL_users, idLog, idContact);
    
        const messageList = messageListArray[0].messages
        const messageToDetele = idMessage - 1
        const idConversation = messageListArray[0].id
        const url_messages = `${URL_users}conversations/${idConversation}`
        const spliceArray = messageList.splice(messageToDetele, 1)
  
        const payload = {
          idSender: idLog,
          idReceiver: idContact,
          id: idConversation,
          messages: messageList,
        };
    
        await patchMessage(url_messages, payload)
    
}