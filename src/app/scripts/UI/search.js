import { getUsers } from "../services/getUsers.js";
import { printUsers } from "./printUsers.js";
const URL_users = "https://back-whatsapp.onrender.com/";
const conversationsContainer = document.querySelector('.conversations-container');

export const searchFunction = (input) => {
    input.addEventListener('input', async (e) => {
        const value = e.target.value.toLowerCase();
        if (value) {
            let users = await getUsers(URL_users)
            users.forEach(user => {
            let isVisible = user.name.toLowerCase().includes(value)
            if (!isVisible) {
                let chat = document.getElementById(`${user.id}`)
                console.log(chat);
                chat.style.display = 'none';
            }
        });
        }
        else {
            let users = await getUsers(URL_users);
            printUsers (users, conversationsContainer);
        }
    })
}
