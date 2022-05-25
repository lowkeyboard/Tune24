import axios from './axiosDeclaration';

export const getAllVideoIDs = async () => {
  try {
    console.log('getAllVideoIDs');
    const users = await axios.get('youtubedata?page=1&limit=30');

    return users.data;
  } catch (err) {
    return console.error(err);
  }
};
