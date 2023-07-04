import "../styles/style.scss";
import "./main-page";
import "./login";
import "./register"

const login = document.getElementById('login');
const register = document.getElementById('register');
const mainPage = document.getElementById('mainPage');




document.addEventListener('DOMContentLoaded', () => {
  const currentView = localStorage.getItem('currentView');
  if (!currentView) {
    login.classList.remove('inactive');
  } else if (currentView === 'register') {
    register.classList.remove('inactive');
  } else if (currentView === 'mainPage') {
    mainPage.classList.remove('inactive');
  } else {
  }
});



