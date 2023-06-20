import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-deslocamento.herokuapp.com'
})

export default api