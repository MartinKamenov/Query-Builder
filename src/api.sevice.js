import axios from 'axios';
const url = 'http://localhost:5000/';
const getUsersPath = 'users/';

const apiService = {
    getUsersREST: async() => {
        return axios.get(url + getUsersPath);
    }
};

export default apiService;