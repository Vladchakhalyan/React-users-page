import * as axios from "axios";

let instacne = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d87504da-d8a7-4104-87b6-b2ba78f15176",
  },
});

export const UsersApi = {
  getUsers(mpageq = 1, mklient = 10) {
    return instacne
      .get(`users?page=${mpageq}&count=${mklient}`)
      .then((response) => response.data);
  },
  getUsers2(id) {
    return instacne.delete(`follow/${id} `).then((response) => response.data);
  },
  getUsers3(id) {
    return instacne.post(`follow/${id} `).then((response) => response.data);
  },
  getUsers4() {
    return instacne.get(`auth/me`).then((response) => response.data);
  },
};

export const profileApi = {
  getUsers5(userid) {
    return instacne.get(`profile/` + userid).then((response) => response.data);
  },
  getStatus(userid) {
    return instacne.get(`profile/status/` + userid);
  },
  statusUpdate(status) {
    return instacne.put(`profile/status/`, {
      status,
    });
  },
};

export const authApi = {
  getUsers4() {
    return instacne.get(`auth/me`).then((response) => response.data);
  },
  authLogin(email, password, rememberMe) {
    return instacne
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  authLoginDelet() {
    return instacne.delete(`auth/login`).then((response) => response.data);
  },
};
