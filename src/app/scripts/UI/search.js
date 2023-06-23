import { getUsers } from "../services/getUsers.js";
const URL_users = "https://back-whatsapp.onrender.com/";

export const searchFunction = (input) => {
    input.addEventListener('input', async (e) => {
        const value = e.target.value.toLowerCase();
        const users = await getUsers(URL_users)
        users.forEach(user => {
            let isVisible = user.name.toLowerCase().includes(value)
            if (!isVisible) {
                let chat = document.getElementById(`${user.id}`)
                console.log(chat);
                chat.style.display = 'none';
            }
        });
    })
}

// const searchFunction = (input) => {
//     const users = await getUsers(URL_users);
//     const originalDisplayStates = {};
  
//     users.forEach(user => {
//       const chat = document.getElementById(`${user.id}`);
//       originalDisplayStates[user.id] = chat.style.display;
//     });
  
//     input.addEventListener('input', (e) => {
//       const value = e.target.value.toLowerCase();
  
//       users.forEach(user => {
//         const chat = document.getElementById(`${user.id}`);
//         const isVisible = user.name.toLowerCase().includes(value);
  
//         if (!isVisible) {
//           chat.style.display = 'none';
//         } else {
//           chat.style.display = originalDisplayStates[user.id] || ''; // Restore original display state
//         }
//       });
//     });
//   };
  
//   // Call searchFunction with the input element
//   const inputElement = document.getElementById('searchInput'); // Replace 'searchInput' with the actual ID of your search input element
//   searchFunction(inputElement);
  