import instance from "./index";
import jwt_decode from "jwt-decode";

const registerNew = async (userInfo) => {
  try {
    const res = await instance.post("/user/signup", userInfo);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const res = await instance.post("/user/signin", userInfo);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const getAllUsers = async () => {
  try {
    const res = await instance.get();
    return res;
  } catch (error) {
    console.log(error);
  }
};
const storeToken = (access) => {
  localStorage.setItem("token", access);
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);

    const currentTime = Date.now() / 10000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logOut = () => {
  localStorage.removeItem("access");
};

const userProfile = async () => {
  try {
    const res = await instance.post("");
    storeToken(res.access);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  registerNew,
  login,
  getAllUsers,
  logOut,
  storeToken,
  checkToken,
  userProfile,
};
