import axios from "axios";

 const axiosConfig = axios.create({
  baseURL: "https://paypal-technical-test-production.up.railway.app"
});

export default axiosConfig;