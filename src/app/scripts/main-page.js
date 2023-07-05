let users = [];
import { openProfile, profile, closeProfile, conversations, openSearch, search, closeSearch, changeImage, inputNewImage, changeName, inputNewName, URL_users, conversationsContainer, searchConversation, enteredUserFigure, enteredUserName, searchMessageInput, formImage, formName, formMessage, messagesContainer, containerDate } from "./UI/data-variables.js";

import {openBlock, closeBlock} from "./UI/toggleFunctions.js"
import { getUsers } from "./services/getUsers.js"
import { printUsers, showClickedUserChat } from "./UI/printUsers.js"
import { searchFunction } from "./UI/search.js"
import { getOneUser } from "./services/getOneUser.js"
import { printUserPicture, printUserName } from "./UI/enteredUser.js"
import { searchMessages } from "./UI/searchMessage.js"
import { editImage, editName, editLastTime } from "./UI/editUser.js";
import { sendMessage } from "./UI/sendMessage.js";
import { getMessages } from "./services/getMessages.js";
import { printMessages} from "./UI/printMessages.js";
import { postNewConversation } from "./UI/postNewConversation.js";
import { editMessage } from "./UI/editMessage.js";
import { showLogin } from "./login.js";
import Swal from "sweetalert2";
import { patchOnline } from "./services/patchOnline.js";
import { deleteMessage } from "./UI/deleteOneMessage.js";

openBlock(openProfile, profile, conversations);
closeBlock(closeProfile, profile, conversations);

openBlock(openSearch, search);
closeBlock(closeSearch, search);

toggleMenu(changeImage, inputNewImage);


openBlock(openProfile, profile, conversations)
closeBlock(closeProfile, profile, conversations)

openBlock(openSearch, search)
closeBlock(closeSearch, search)


document.addEventListener("DOMContentLoaded", async () => {
  users = await getUsers(URL_users);
  console.log(users);
  printUsers(users, conversationsContainer);
  showClickedUserChat();
  const userId = localStorage.getItem("userId");
  const userOnline = localStorage.getItem("userOnline");
  console.log(userOnline);

  if (userId) {
    const user = await getOneUser(URL_users, userId);
    printUserPicture(user, enteredUserFigure);
    printUserName(user, enteredUserName);
    if (userOnline !== "true") {
      await patchOnline(URL_users, userId, { online: true });
      localStorage.setItem("userOnline", "true");
      console.log("userOnline");
    }
  }
});
searchFunction(searchConversation);

searchMessages(searchMessageInput);

editImage(formImage);
editName(formName);

const toggleMenuImage =  () => {
  changeImage.addEventListener('click',async () => {
    inputNewImage.classList.toggle('inactive');
    await editImage(formImage)
    
})
}
const toggleMenuName = () => {
  changeName.addEventListener('click',async () => {
    inputNewName.classList.toggle('inactive');
    await editName(formName)
    
})
}
toggleMenuName()
toggleMenuImage()

formMessage.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idContact = parseInt(localStorage.getItem('idContact'));
    const idLog = parseInt(localStorage.getItem('userId'));
    const messages = await getMessages(URL_users, idLog, idContact);
    if (messages.length > 0) {
        await sendMessage();
    }
    else {
        await postNewConversation()
    }
    const messages2 = await getMessages(URL_users, idLog, idContact);
    printMessages(messages2, messagesContainer);
    formMessage.reset();
})

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("edit")) {
    const idMessage = e.target.getAttribute("edit-id");
    console.log("idMessage",idMessage);
    const inputEdit = document.querySelector(`.edit-${idMessage}`);
    inputEdit.classList.toggle('inactive');
    inputEdit.addEventListener('submit', async (event)=> {
        event.preventDefault()
        const inputToEdit = inputEdit.querySelector('.inputToEdit')
        await editMessage(idMessage, inputToEdit)
        const idContact = parseInt(localStorage.getItem('idContact'));
        const idLog = parseInt(localStorage.getItem('userId'));
        const messages = await getMessages(URL_users, idLog, idContact);
        printMessages(messages, messagesContainer);
    })
    }
    
  else if (e.target.classList.contains("delete")) {
    const idMessage = e.target.getAttribute("delete-id");
    Swal.fire({
      title: "¿Estás seguro de que quiere eliminar el mensaje?",
      text: "No vas a poder revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórrala!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteMessage(idMessage);
        const idContact = localStorage.getItem("idContact");
        const idLog = localStorage.getItem("userId");
        const messages = await getMessages(URL_users, idLog, idContact);
        printMessages(messages, messagesContainer);
        Swal.fire(
          "Eliminado!",
          "El mensaje se ha eliminado correctamente",
          "success"
        );
      }
    });
    }
  })

  document.querySelector('.profileLogOut').addEventListener('click', () => {
    Swal.fire({
      title: 'Cerrar sesión',
      text: '¿Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
     
        await editLastTime()
        localStorage.removeItem('userId'); 
        location.reload() 
        showLogin();
      }
    });
  });

const login = document.getElementById("login");
const register = document.getElementById("register");
const mainPage = document.getElementById("mainPage");

export const showMainPage = () => {
  localStorage.setItem("currentView", "mainPage");
  login.classList.add("inactive");
  register.classList.add("inactive");
  mainPage.classList.remove("inactive");
};