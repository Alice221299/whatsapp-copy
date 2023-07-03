import Swal from 'sweetalert2'

const openProfile = document.querySelector('.profile-picture');
const profile = document.querySelector('.profile');
const closeProfile = document.getElementById('close-profile');
const conversations = document.querySelector('.conversations');
const openSearch = document.getElementById('open-search-module');
const search = document.querySelector('.change-message');
const closeSearch = document.getElementById('close-search-module');
const changeImage = document.querySelector('.image');
const inputNewImage = document.querySelector('.image-input');
const changeName = document.querySelector('.change-name');
const inputNewName = document.querySelector('.name-input');
const URL_users = "https://back-whatsapp.onrender.com/";
let users = [];
const conversationsContainer = document.querySelector('.conversations-container');
const searchConversation = document.querySelector('.search-input');
const enteredUserFigure = document.querySelector('.profile-picture');
const enteredUserName = document.querySelector('.user-name');
const searchMessageInput = document.getElementById('search-message-input');
const formImage = document.querySelector('.image-input');
const formName = document.querySelector('.name-input');
const formMessage = document.querySelector('.write-message');
const messagesContainer = document.querySelector('.messages-chat');

import {openBlock} from "./UI/toggleFunctions.js"
import {closeBlock} from "./UI/toggleFunctions.js"
import {toggleMenu} from "./UI/toggleFunctions.js"
import { getUsers } from "./services/getUsers.js"
import { printUsers } from "./UI/printUsers.js"
import { searchFunction } from "./UI/search.js"
import { showClickedUserChat } from "./UI/printUsers.js"
import { getOneUser } from "./services/getOneUser.js"
import { printUserPicture } from "./UI/enteredUser.js"
import { printUserName } from "./UI/enteredUser.js"
import { searchMessages } from "./UI/searchMessage.js"
import { editImage, editName } from "./UI/editUser.js";
import { sendMessage } from "./UI/sendMessage.js";
import { getMessages } from "./services/getMessages.js";
import { printMessages } from "./UI/printMessages.js";
import { showLogin } from './login.js';


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
    await sendMessage();
    const idContact = localStorage.getItem('idContact');
    const idLog = localStorage.getItem('userId');
    const messages = await getMessages(URL_users, idLog, idContact);
    printMessages(messages, messagesContainer);
    //location.reload()
})

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
        // document.getElementById('main-page').style.display = 'none';
        
        // document.getElementById('loginForm').style.display = 'block';

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

