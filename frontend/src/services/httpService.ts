import axios from "axios";

axios.defaults.headers.common["x-auth-token"] =
  localStorage.getItem("token") || "";

const exportedObject = {
  get: axios.get,
  post: axios.post,
};
export default exportedObject;
