import { getMessages } from "../services/getMessages.js";
import { patchMessage } from "../services/patchMessage.js";
import { URL_users } from "./data-variables.js";

export const editMessage = async (idMessage, input) => {
    const idContact = parseInt(localStorage.getItem('idContact'));
    const idLog = parseInt(localStorage.getItem('userId'));
    const messageListArray = await getMessages(URL_users, idLog, idContact);
    
        const messageList = messageListArray[0].messages
        console.log(messageList);
        const messageToEdit = messageList.find(mes => mes.id == idMessage)
        console.log(messageToEdit);
        //input.value = messageToEdit.message
        const idConversation = messageListArray[0].id
        const url_messages = `${URL_users}conversations/${idConversation}`
    
        messageToEdit.message = input.value;

        const payload = {
          idSender: idLog,
          idReceiver: idContact,
          id: idConversation,
          lastMessage: messageListArray[0].lastMessage,
          messages: messageList,
        };
    
        await patchMessage(url_messages, payload)
    
}