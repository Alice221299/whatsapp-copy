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
        await patchUser(URL_users, userId, editedInfo)
        location.reload()
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
  }