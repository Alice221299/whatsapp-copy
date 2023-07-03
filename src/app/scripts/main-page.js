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


openBlock(openProfile, profile, conversations)
closeBlock(closeProfile, profile, conversations)

openBlock(openSearch, search)
closeBlock(closeSearch, search)

toggleMenu(changeImage, inputNewImage)

toggleMenu(changeName, inputNewName)

document.addEventListener("DOMContentLoaded", async () => {
    users = await getUsers(URL_users);
    console.log(users);
    printUsers (users, conversationsContainer);
    showClickedUserChat();
    const userId = localStorage.getItem('userId');
    let user = await getOneUser(URL_users, userId);
    printUserPicture(user, enteredUserFigure);
    printUserName(user, enteredUserName)
})

searchFunction(searchConversation)

searchMessages(searchMessageInput)

editImage(formImage)
editName(formName)

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

// document.addEventListener('click', async (e) => {
//     if (e.target.classList.contains("edit")) {
//     const idMessage = e.target.getAttribute("edit-id");
//     const inputEdit = document.querySelector(`.edit-${idMessage}`);
//     inputEdit.classList.toggle('inactive');
//     inputEdit.addEventListener('submit', async (event)=> {
//         event.preventDefault()
//         await editMessage(idMessage)
//         const idContact = localStorage.getItem('idContact');
//         const idLog = localStorage.getItem('userId');
//         const messages = await getMessages(URL_users, idLog, idContact);
//         printMessages(messages, messagesContainer);
//     })
//     }})


document.querySelector('.profile--log-out').addEventListener('click', () => {
    Swal.fire({
      title: 'Log Out',
      text: 'Are you sure you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';

        localStorage.removeItem('userId');        
      }
    });
  });
  

