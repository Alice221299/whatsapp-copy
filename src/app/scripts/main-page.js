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
const enteredUserName = document.querySelector('.user-name')

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
  


