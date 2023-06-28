import { getUsers } from "../services/getUsers.js";
import { printUsers } from "./printUsers.js";
const URL_users = "https://back-whatsapp.onrender.com/";
const conversationsContainer = document.querySelector('.conversations-container');

export const searchFunction = (input) => {
    input.addEventListener('input', async (e) => {
        const value = e.target.value.toLowerCase();
        if (value) {
            let users = await getUsers(URL_users)
            const filter = users.filter((user) =>
                user.name.toLowerCase().includes(value)
                );
            printUsers(filter, conversationsContainer);
        }
        else {
            let users = await getUsers(URL_users);
            printUsers (users, conversationsContainer);
        }
    })
}
