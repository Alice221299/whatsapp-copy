import axios from "axios";

export const patchUser = async (url, id, editedInfo) => {
  try {
    const editUrl = `${url}/${id}`;
      const response = await axios.patch(editUrl, editedInfo);
      console.log(response);
      return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};