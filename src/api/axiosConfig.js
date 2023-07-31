import axios from 'axios';

export default axios.create({
    baseURL: "https://eded-68-49-62-166.ngrok-free.app",
    // baseURL: "http://localhost:8080",
    headers: {"ngrok-skip-browser-warning":"true"}  
});