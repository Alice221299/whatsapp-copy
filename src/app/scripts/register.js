import Swal from 'sweetalert2'
import { showMainPage } from './main-page.js';
import axios from 'axios';
import { DateTime } from "luxon";
import { showLogin } from './login.js';

const URL_users_post = "https://back-whatsapp.onrender.com/users";
const linkSingUp = document.querySelector('.linkSingUp');

const singUpForm = document.getElementById('singUpForm');
const SignUpFormSubmit = async (event) => {
  event.preventDefault();
   
  const userName = document.getElementById('singUpUserName').value;
  const phoneNumber = document.getElementById('singUpUserPhone').value;
  const password = document.getElementById('singUpUserPassword').value;
  const pictureUrl = document.getElementById('singUpUserPicture').value;
  const about = document.getElementById('singUpUserAbout').value;
   
  if (!userName || !phoneNumber || !password || !pictureUrl || !about) {
    Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    return;
  }
  const users = axios.post(URL_users_post, {
    name: userName,
    phone: phoneNumber,
    password: password,
    profilePicture: pictureUrl,
    flag: true,
    about: about,
    lastTime: DateTime.now().toISO()
  })
  .then(response => {
    console.log(response.status);
    if (response.status === 201) {
      Swal.fire('Éxito', 'El nuevo usuario ha sido creado exitosamente.', 'success');
      // showMainPage();
      showLogin();
      singUpForm.reset();
    } else {
      Swal.fire('Error', 'El número de celular ingresado ya está registrado.', 'error');
    }
  })
  .catch();
  

}

singUpForm.addEventListener('submit', SignUpFormSubmit);



console.log(linkSingUp);

const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');

export const showRegister = () => {
  console.log('entre');
  localStorage.setItem('currentView', 'register');
  login.classList.add('inactive');
  register.classList.remove('inactive');
  mainPage.classList.add('inactive');
}



