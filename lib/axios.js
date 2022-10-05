import Axios from "axios";

import { getCookie } from "../utils/cookie";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

(() => {
  if (typeof window === "undefined" && typeof document === "undefined") return;

  const token = getCookie("token") ?? "";

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }
})();
