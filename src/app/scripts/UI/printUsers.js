import { getMessages } from "../services/getMessages.js";
import { printMessages } from "./printMessages.js";
import { getOneUser } from "../services/getOneUser.js";
import { DateTime, Duration} from "luxon";
import { URL_users, messagesContainer, chosenUserInfoContainer, chosenUserName } from "./data-variables.js";

export const printUsers = (array, container) => {
    container.innerHTML = '';
    array.forEach((user) => {
        const formattedLastTime = DateTime.fromISO(user.lastTime).toRelative();
        container.innerHTML += `
        <div class="chat" data-id="${user.id}">
            <figure class="profile-picture">
                <img src="${user.profilePicture}" alt="${user.name}">
            </figure>
            <div class="chat-all">
                <div class="chat-info">
                    <h3>${user.name}</h3>
                    <p>${formattedLastTime}</p>
                </div>
                <div class="chat-message">
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#4CB29C" d="M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9-69.9 70.5-108 164.1-107.6 263.8.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6 70.4-69.8 109.5-163.1 110.1-262.7.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path> <path d="M664 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"></path> <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path> <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"></path> </g></svg>
                    <p>${user.about}</p>
                </div>
            </div>
        </div>  `  })}

export const showClickedUserChat = () => {
    document.addEventListener('click', async (e) => {
        if (e.target.classList.contains('chat')) {
            let idContact = e.target.getAttribute('data-id');
            localStorage.setItem('idContact', idContact);
            const idLog = localStorage.getItem('userId');
            //e.target.setAttribute('id', 'chat-chosen')
            const messages = await getMessages(URL_users, idLog, idContact);
            console.log("Messages:", messages);
            printMessages(messages, messagesContainer);
            const chosenUser = await getOneUser(URL_users, idContact);
            printChosenUserInfo(chosenUser, chosenUserInfoContainer);
            printName(chosenUser, chosenUserName)
        }
    })
}

export const printChosenUserInfo = (user, container) => {
    container.innerHTML = '';
    container.innerHTML += `
    <figure class="profile-picture">
        <img src="${user.profilePicture}" alt="${user.name}">
    </figure>
    <div>
        <h3>${user.name}</h3>
        <p>${user.online ? 'EN LINEA' : 'DESCONECTADO'}</p>
    </div>
    `
}
const printName = (user, container) => {
    container.innerHTML = '';
    container.innerHTML += `
    <p>Mensajes con ${user.name}</p>
    `
}