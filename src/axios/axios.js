import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.igadev.com"
});

export default instance;
