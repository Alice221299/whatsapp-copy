import axios from "axios";

export const patchOnline = async (url, id, editedInfo) => {
  try {
    const editUrl = `${url}users/${id}`;
      const response = await axios.patch(editUrl, editedInfo);
      console.log(response);
      return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};