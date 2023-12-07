import axios from "axios";
import env from "react-dotenv";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization: process.env.REACT_APP_ACCESS_KEY
    }
})