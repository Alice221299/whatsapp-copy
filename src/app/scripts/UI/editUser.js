import { patchUser } from "../services/patchUser.js";
import { DateTime } from "luxon";
const URL_users = "https://back-whatsapp.onrender.com/users";

export const editImage = async (form) => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const inputImage = document.getElementById('image-input-value');
        const userId = localStorage.getItem('userId');
        let editedInfo = {
            profilePicture: inputImage.value
        }
<<<<<<< HEAD
        patchUser(URL_users, userId, editedInfo)
=======
        await patchUser(URL_users, userId, editedInfo)
        location.reload()
>>>>>>> c1ccb17fc9b9c44a51f385887e5e1c05e8b7f448
    });
  }
  export const editName = async (form) => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const inputName = document.getElementById('name-input-value');
        const userId = localStorage.getItem('userId');
        let editedInfo = {
            name: inputName.value
        }
<<<<<<< HEAD
        patchUser(URL_users, userId, editedInfo)
    });
    //location.reload()
=======
        await patchUser(URL_users, userId, editedInfo)
        location.reload()
    });
  }

  export const editLastTime = async () => {
        const userId = localStorage.getItem('userId');
        let editedInfo = {
            lastTime: DateTime.now().toISO(),
        }
        await patchUser(URL_users, userId, editedInfo)
>>>>>>> c1ccb17fc9b9c44a51f385887e5e1c05e8b7f448
  }