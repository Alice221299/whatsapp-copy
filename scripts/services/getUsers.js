let users = []

export const getUsers = async (url) => {
  try {
    const endpoint = "users";
    const {users} = await axios.get(`${url}${endpoint}`);
    return users
  } catch (error) {
    console.log(error);
  }
};