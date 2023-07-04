import Swal from 'sweetalert2'
import axios from 'axios';
import { DateTime } from "luxon";
import { showLogin } from './login.js';

const URL_users = "https://back-whatsapp.onrender.com/users";

const checkPhoneNumber = async (phoneNumber) => {
  try {
    const response = await axios.get(URL_users);
    const users = response.data;
    for (let i = 0; i < users.length; i++) {
      if (users[i].phone === phoneNumber) {
        return users[i]; 
      }
    }
    return null; 
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getNextUserId = async () => {
  try {
    const response = await axios.get(`${URL_users}?_sort=id&_order=desc&_limit=1`);
    const lastUser = response.data[0];
    return lastUser.id + 1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const singUpForm = document.getElementById('singUpForm');

const SignUpFormSubmit = async (event) => {
  event.preventDefault();
   
  const userName = document.getElementById('singUpUserName').value;
  const phoneNumber = Number(document.getElementById('singUpUserPhone').value);
  const password = Number(document.getElementById('singUpUserPassword').value);
  const pictureUrl = document.getElementById('singUpUserPicture').value;
  const about = document.getElementById('singUpUserAbout').value;
   
  if (!userName || !phoneNumber || !password || !pictureUrl || !about) {
    Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    return;
  }

  try {
    const existingUser = await checkPhoneNumber(phoneNumber);
    if (existingUser) {
      Swal.fire('Error', 'El número de celular ingresado ya está registrado.', 'error');
      return;
    }

    const nextUserId = await getNextUserId();
    const response = await axios.post(URL_users, {
      id: nextUserId,
      name: userName,
      phone: phoneNumber,
      password: password,
      profilePicture: pictureUrl,
      flag: true,
      about: about,
      lastTime: DateTime.now().toISO()
    });

    console.log(response.status);
    if (response.status === 201) {
      Swal.fire('Éxito', 'El nuevo usuario ha sido creado exitosamente.', 'success');
      showLogin();
      singUpForm.reset();
    } else {
      Swal.fire('Error', 'El número de celular ingresado ya está registrado.', 'error');
    }
  
  }catch(error){
    console.log(error);
    Swal.fire('Error', 'Hubo un problema al crear el usuario.', 'error');
  }
  
}

singUpForm.addEventListener('submit', SignUpFormSubmit);

const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');

export const showRegister = () => {
  localStorage.setItem('currentView', 'register');
  login.classList.add('inactive');
  register.classList.remove('inactive');
  mainPage.classList.add('inactive');
}