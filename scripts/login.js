const URL_API = "https://back-whatsapp.onrender.com"

import {getUsers} from "./services/getUsers.js"

getUsers(URL_API)











const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const params = { loginForm: loginForm, url: URL_users};
    //SubmitMovimiento(params);
})

