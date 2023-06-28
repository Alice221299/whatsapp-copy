import Swal from 'sweetalert2'
const URL_users_post = "https://back-whatsapp.onrender.com/users";

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
  
  const users = await axios.post(URL_users_post, {

    name: userName,
    phone: phoneNumber,
    password: password,
    profilePicture: pictureUrl,
    flag: true,
    about: about,
    lastTime: luxon.DateTime.now().toISO()
  })
  .then(response => {
   
    if (response.status === 200 && response.data.success) {
      Swal.fire('Éxito', 'El nuevo usuario ha sido creado exitosamente.', 'success');
    } else {
      Swal.fire('Error', 'El número de celular ingresado ya está registrado.', 'error');
    }
  })
  .catch 
}

singUpForm.addEventListener('submit', SignUpFormSubmit);