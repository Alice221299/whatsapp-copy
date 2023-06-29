import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5050';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

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