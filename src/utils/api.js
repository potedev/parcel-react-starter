import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:4000/api/v1/"
})

// export const addAuth = token => {
//     // instance.defaults.headers.common["Authorization"] = "Bearer " + token;
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

export default instance;