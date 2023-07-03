import axios from "axios";

export const deleteMessage = async (url, id) => {
    try {
        const urlMessage = `${url}/${id}`
        const response = await axios.delete(urlMessage);
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
