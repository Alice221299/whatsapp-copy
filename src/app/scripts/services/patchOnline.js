import axios from "axios";

export const patchOnline = async (url, id, editedInfo) => {
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

//   import axios from "axios";

// export const patchMessage = async (url, newMessage) => {
//   try {
//     const response = await axios.patch(url, newMessage);
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };