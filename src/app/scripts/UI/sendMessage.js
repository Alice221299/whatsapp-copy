import { getMessages } from "../services/getMessages.js";

export const sendMessage = async (message, messageList, user) => {

    const messageList = await getMessages
    const id = messageList.length + 1;

    const nuevoMensaje = {
      id: id,
      sentBy: usuario.id,
      date: DateTime.now(),
      message: mensaje,
      fueVisto: false,
    };

    listaMensajes.push(nuevoMensaje);
    console.log(listaMensajes);
    
}