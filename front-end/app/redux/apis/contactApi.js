import axios from './axiosDeclaration';

export const getAllVideoIDs = async () => {
  try {
    console.log('getAllVideoIDs');
    const users = await axios.get('users?_limit=10');

    return users.data;
  } catch (err) {
    return console.error(err);
  }
};
