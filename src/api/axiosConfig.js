import axios from 'axios';

export default axios.create({
    baseURL: "http://movies-api-env.eba-mmppmymz.us-east-2.elasticbeanstalk.com/",
    // baseURL: "http://localhost:8080",
    headers: {"ngrok-skip-browser-warning":"true"}  
});