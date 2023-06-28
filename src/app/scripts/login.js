import { getUsers } from './services/getUsers.js';
//import { URL_users } from './services/data.js'

const URL_users = "https://back-whatsapp.onrender.com/";
const formLogin = document.getElementById('loginForm');

const loginFormSubmit = async (event) => {
  event.preventDefault();

  const phoneNumber = document.getElementById('loginUserPhone').value;
  const password = document.getElementById('loginPassword').value;

  if (!phoneNumber || !password) {
    Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    return;
  }

  const users = await getUsers(URL_users);

  const user = users.find((user) => user.phone == phoneNumber);

  if (!user) {
    Swal.fire('Error', 'El número ingresado no existe.', 'error');
    return;
  }

  if (user.password != password) {
    Swal.fire('Error', 'La contraseña ingresada es incorrecta.', 'error');
    return;
  }

  Swal.fire('Bienvenido', `Bienvenido ${user.name}`, 'success').then(() => {
 
    document.getElementById('main-page').style.display = 'block';

    document.getElementById('loginForm').style.display = 'none';
    
    const userId = user.id;
    localStorage.setItem('userId', userId);
  });
};

formLogin.addEventListener('submit', loginFormSubmit);
