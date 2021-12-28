import http from "./httpService";
import * as url from "../config.json";
const { apiUrl } = url;
const apiEndPoint = apiUrl + "login";

export async function login(username: string, password: string) {
  const { data } = await http.post(apiEndPoint, { username, password });
  localStorage.setItem("token", data);
}
