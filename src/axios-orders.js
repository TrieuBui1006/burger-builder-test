import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bui.firebaseio.com/'
});

export default instance;