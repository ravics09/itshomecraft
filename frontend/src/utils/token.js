const setToken = (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("user"))?.token || "";
};

const removeToken = () => {
  localStorage.removeItem("user");
};

export { getAccessToken, removeToken, setToken };