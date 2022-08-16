import api from "./base";

export function login(payload) {
  return api.post("/signin", payload);
}

export function register(payload) {
  return api.post("/register", payload);
}
