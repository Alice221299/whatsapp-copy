let users = [];
import { openProfile, profile, closeProfile, conversations, openSearch, search, closeSearch, changeImage, inputNewImage, changeName, inputNewName, URL_users, conversationsContainer, searchConversation, enteredUserFigure, enteredUserName, searchMessageInput, formImage, formName, formMessage, messagesContainer } from "./UI/data-variables.js";

import {openBlock, closeBlock, toggleMenu} from "./UI/toggleFunctions.js"
import { getUsers } from "./services/getUsers.js"
import { printUsers, showClickedUserChat } from "./UI/printUsers.js"
import { searchFunction } from "./UI/search.js"
import { getOneUser } from "./services/getOneUser.js"
import { printUserPicture, printUserName } from "./UI/enteredUser.js"
import { searchMessages } from "./UI/searchMessage.js"
import { editImage, editName } from "./UI/editUser.js";
import { sendMessage } from "./UI/sendMessage.js";
import { getMessages } from "./services/getMessages.js";
import { printMessages } from "./UI/printMessages.js";
import { postNewConversation } from "./UI/postNewConversation.js";
import { editMessage } from "./UI/editMessage.js";
import { showLogin } from './login.js';
import Swal from 'sweetalert2'


openBlock(openProfile, profile, conversations)
closeBlock(closeProfile, profile, conversations)

openBlock(openSearch, search)
closeBlock(closeSearch, search)


document.addEventListener("DOMContentLoaded", async () => {
    users = await getUsers(URL_users);
    console.log(users);
    printUsers (users, conversationsContainer);
    showClickedUserChat();
    const userId = localStorage.getItem('userId');
if (userId) {
  const user = await getOneUser(URL_users, userId);
  printUserPicture(user, enteredUserFigure);
  printUserName(user, enteredUserName)
}
})

searchFunction(searchConversation)

searchMessages(searchMessageInput)

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
    const idContact = localStorage.getItem('idContact');
    const idLog = localStorage.getItem('userId');
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

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains("edit")) {
    const idMessage = e.target.getAttribute("edit-id");
    console.log("idMessage",idMessage);
    const inputEdit = document.querySelector(`.edit-${idMessage}`);
    inputEdit.classList.toggle('inactive');
    inputEdit.addEventListener('submit', async (event)=> {
        event.preventDefault()
        const inputToEdit = inputEdit.querySelector('.inputToEdit')
        await editMessage(idMessage, inputToEdit)
        const idContact = localStorage.getItem('idContact');
        const idLog = localStorage.getItem('userId');
        const messages = await getMessages(URL_users, idLog, idContact);
        printMessages(messages, messagesContainer);
    })
}})


document.querySelector('.profileLogOut').addEventListener('click', () => {
    Swal.fire({
      title: 'Log Out',
      text: 'Are you sure you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
     
        localStorage.removeItem('userId');  
        
        showLogin();
      }
    });
  });


const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');

export const showMainPage = () => {
  //localStorage.removeItem('currentView', 'login');
  //localStorage.removeItem('currentView', 'register');
  localStorage.setItem('currentView', 'mainPage');
  login.classList.add('inactive');
  register.classList.add('inactive');
  mainPage.classList.remove('inactive');
}
//____________

// const deleteOneMessage = Document.querySelector('.delete');
// import { deleteMessage } from '../services/deleteMessage';

// deleteOneMessage.addEventListener('click', async (e) => {
//   e.preventDefault()

//   /////No la he definido const idMessage = localStorage.getItem('idMessage');
//   await deleteMessage(id);

  
//   // const idLog = localStorage.getItem('userId');
//   // const messages = await getMessages(URL_users, idLog, idContact);
//   // printMessages(messages, messagesContainer);
//   //location.reload()
// })

