import { getUsers } from './services/getUsers.js';
import Swal from 'sweetalert2'
import { showMainPage } from './main-page.js';
import { showRegister } from './register.js';

const URL_users = "https://back-whatsapp.onrender.com/";
const formLogin = document.getElementById('loginForm');

const loginFormSubmit = async (event) => {
  event.preventDefault();

  const phoneNumber = document.getElementById('loginUserPhone').value;
  const password = document.getElementById('loginPassword').value;

  if (!phoneNumber) {
    Swal.fire('Error', 'Por favor, colocar el número de teléfono', 'error');
    return;
  }
  if (!password) {
    Swal.fire('Error', 'Por favor, colocar la contraseña', 'error');
    return;
  }

  const users = await getUsers(URL_users);

  const user = users.find((user) => user.phone == phoneNumber);

  if (!user) {
    Swal.fire('Error', 'El usuario ingresado no existe.', 'error');
    return;
  }

  if (user.password != password) {
    Swal.fire('Error', 'La contraseña ingresada es incorrecta.', 'error');
    return;
  }

  Swal.fire('Bienvenido', `Bienvenido ${user.name}`, 'success').then(() => {
  
    const userId = user.id;
    // const userOnline =user.online;
    localStorage.setItem('userId', userId);
    location.reload()
    showMainPage();
    //colocar el parch
  });
};

formLogin.addEventListener('submit', loginFormSubmit);

const linkSingUp = document.querySelector('.linkSingUp');
linkSingUp.addEventListener('click', showRegister)

const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');

export const showLogin = () => {
  localStorage.removeItem('currentView');
  login.classList.remove('inactive');
  register.classList.add('inactive');
  mainPage.classList.add('inactive');
}