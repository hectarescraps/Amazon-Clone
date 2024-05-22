import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-874e4.cloudfunctions.net/api",
  // Local: "http://127.0.0.1:5001/clone-874e4/us-central1/api", // API URL
});

export default instance;
