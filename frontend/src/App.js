import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/home";
import SignIn from "./pages/SignIn/signin";
import SignUp from "./pages/SignUp/signup";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import UserAccount from "./pages/UserAccount/userAccount";
import EditProfile from "./pages/EditProfile/editProfile";

import * as routes from "./constants/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact={true} path={routes.HOME} element={<Home />} />
            <Route exact={true} path={routes.SIGNIN} element={<SignIn />} />
            <Route exact={true} path={routes.SIGNUP} element={<SignUp />} />
            <Route exact={true} path={routes.FORGOTPASSWORD} element={<ForgotPassword />} />
            <Route exact={true} path={routes.RESETPASSWORD} element={<ResetPassword />} />
            <Route exact={true} path={routes.USERACCOUNT} element={<UserAccount />} />
            <Route exact={true} path={routes.EDITPROFILE} element={<EditProfile />} />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
