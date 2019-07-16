import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-50d64.firebaseio.com/'
})

export default instance;