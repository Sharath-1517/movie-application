import axios from "axios";

export default axios.create({
    // ENTER YOUR BACKEND API URL HERE.
    baseURL: "http://localhost:8080"
})