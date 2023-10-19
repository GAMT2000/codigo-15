// Funciones para nuestro CRUD
import { makeHttpRequest } from "./config";

export async function create(body, url) {
  return await makeHttpRequest({ url, body, method: "POST" });
}

export async function read(url) {
  return await makeHttpRequest({ url });
}

export async function update(id, body) {
  return await makeHttpRequest({ url, id, body, method: "PUT" });
}

export async function detroy(id, url) {
  return await makeHttpRequest({ id, url, method: "DELETE" });
}
