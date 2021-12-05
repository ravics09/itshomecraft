import getAccessToken from "./../utils/token";

const authHeader = () => {
  const user = getAccessToken();

  if (user && user.accessToken) {
    const header = { Authorization: "Bearer " + user.accessToken };
    return header;
  } else {
    return {};
  }
};

export default authHeader;
