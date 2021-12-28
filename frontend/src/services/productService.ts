import http from "./httpService";
import * as url from "../config.json";
const { apiUrl } = url;
const apiEndPoint = apiUrl + "get-all-products";

export async function getAllProduct() {
  const { data } = await http.get(apiEndPoint);
  return data;
}
