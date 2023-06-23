import axios from "axios";

export const patchInfo = async (url, id, editFunction) => {
  try {
    const editUrl = `${url}/${id}`;
      const response = await axios.patch(editUrl, editFunction);
      console.log(response);
      return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};