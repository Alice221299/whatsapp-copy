import "../styles/style.scss";
import "./main-page";
import "./login";
import "./register"

// función para permanecer en los estilos de cada div

const currentView = localStorage.getItem(currentView);

const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');

// document.addEventListener('DOMContentLoaded', () => {
//     switch (true) {
//       case !currentView:
//         login.classList.add('active');
//         register.classList.add('inactive');
//         mainPage.classList.add('inactive');
//         break;
//         case currentView === 'register':
//         login.classList.add('inactive');
//         register.classList.add('active');
//         mainPage.classList.add('inactive');
//         break;
//         case currentView === 'mainPage':
//         login.classList.add('inactive');
//         register.classList.add('inactive');
//         mainPage.classList.add('active');
//         break;
//       default:
//         break;
//     }
//   });



// document.addEventListener('DOMContentLoaded', () => {
//   switch (currentView) {
//     case 'login':
//       showLogin();
//       // login.classList.add('active');
//       // register.classList.add('inactive');
//       // mainPage.classList.add('inactive');
//       break;
//       case 'register':
//         showRegister();
//       // login.classList.add('inactive');
//       // register.classList.add('active');
//       // mainPage.classList.add('inactive');
//       break;
//       case 'mainPage':
//         showMainPage();
//       // login.classList.add('inactive');
//       // register.classList.add('inactive');
//       // mainPage.classList.add('active');
//       break;
//     default:
//       break;
//   }
// });


// const haldleSubmit = (e) => {
//   e.preventDefault();
// }


// const singUpForm = document.getElementById('singUpForm');
// singUpForm.addEventListener('submit', (e) => {
//   haldleSubmit(e)
// })

// const profileLogOut = document.querySelector('profileLogOut');
// profileLogOut.addEventListener('click', () => {

// })


document.addEventListener('DOMContentLoaded', () => {
  const currentView = localStorage.getItem('currentView');

  if (currentView === 'login') {
    login.classList.add('active');
    register.classList.add('inactive');
    mainPage.classList.add('inactive');
  } else if (currentView === 'register') {
    login.classList.add('inactive');
    register.classList.add('active');
    mainPage.classList.add('inactive');
  } else if (currentView === 'mainPage') {
    login.classList.add('inactive');
    register.classList.add('inactive');
    mainPage.classList.add('active');
  } else {
    // Default case
    login.classList.add('active');
    register.classList.add('inactive');
    mainPage.classList.add('inactive');
  }
});