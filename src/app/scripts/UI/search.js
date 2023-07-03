import { getUsers } from "../services/getUsers.js";
import { printUsers } from "./printUsers.js";
import { URL_users, conversationsContainer } from "./data-variables.js";

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
