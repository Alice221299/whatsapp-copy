// import axios from "axios";
// import Swal from 'sweetalert2';
// import { patchMessage } from "../services/patchMessage.js";
// const URL = "https://back-whatsapp.onrender.com/";

// const deleteOneMessage = async (messageId) => {
//     try {
//       const url = 'https://example.com/api/messages';
      
//       Swal.fire({
//         title: 'Está seguro?',
//         text: "Usted no va a poder revertir esto!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sí, borrala!'
//       }).then(async (result) => {
//         if (result.isConfirmed) {
//           // Realizar la eliminación del mensaje
//           const response = await patchMessage(url, messageId);
//           // Realizar cualquier otra acción necesaria después de eliminar el mensaje
//           console.log(response);
  
//           // Mostrar Sweet Alert de éxito
//           Swal.fire('Deleted!', '', 'success');
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

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
        const splicedEl = messageList.splice(messageToDetele, 1)
  
        const payload = {
          idSender: idLog,
          idReceiver: idContact,
          id: idConversation,
          messages: messageList,
        };
    
        await patchMessage(url_messages, payload)
    
}