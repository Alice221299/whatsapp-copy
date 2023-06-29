import { getMessages } from "../services/getMessages.js";
import { printSearchedMessages } from "./printSearchedMessages.js";
const URL = "https://back-whatsapp.onrender.com/";
const searcMessagesContainer = document.querySelector('.chosen-message');

export const searchMessages = (input) => {
    input.addEventListener('input', async (e) => {
        const value = e.target.value.toLowerCase();
        if (value) {
            const idContact = localStorage.getItem('idContact');
            const idLog = localStorage.getItem('userId');
            const messageListArray = await getMessages(URL, idLog, idContact);
            const messageList = messageListArray[0].messages
            const filter = messageList.filter((messageObj) =>
                messageObj.message.toLowerCase().includes(value)
                );
            printSearchedMessages(filter, searcMessagesContainer);
        }
        else {
            searcMessagesContainer.innerHTML = ""
            
        }
    })
}