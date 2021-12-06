import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import UserAccountStyle from "./userAccount.module.css";
import OrderImg from "./../../assets/images/accountImages/order.png";
import EditProfileImg from "./../../assets/images/accountImages/editprofile.png";
import CancelledOrderImg from "./../../assets/images/accountImages/cancelled.png";
import PaymentOptionsImg from "./../../assets/images/accountImages/payment.png";
import RecommandationImg from "./../../assets/images/accountImages/recommandation.png";
import RewardImg from "./../../assets/images/accountImages/reward.png";
import WishlistImg from "./../../assets/images/accountImages/wishlist.png";
import TrackOrderImg from "./../../assets/images/accountImages/track.png";

const UserAccount = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  const handleOrderList = () => {
    alert("loading order list ");
  };

  const handleWishList = () => {
    alert("loading wish list ");
  };

  const handleCancelledOrderList = () => {
    alert("loading cancelled order list ");
  };

  const handleTrackOrderList = () => {
    alert("loading track order list ");
  };

  const handleEditProfile = () => {
    alert("loading edit profile ");
  };

  const handlePaymentMethod = () => {
    alert("loading payment method ");
  };

  const handleRewardPoint = () => {
    alert("loading reward points");
  };

  const handleRecommandation = () => {
    alert("loading recommandation");
  };

  return (
    <>
      <Row>
        <h2>Your Account</h2>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleOrderList()}
          >
            <div>
              <img src={OrderImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Your Order</b>
              <p>Check your order list</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleWishList()}
          >
            <div>
              <img src={WishlistImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Wishlist</b>
              <p>Check your wishlist item</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleCancelledOrderList()}
          >
            <div>
              <img src={CancelledOrderImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Cancelled Order</b>
              <p>Check cancelled orders</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleTrackOrderList()}
          >
            <div>
              <img src={TrackOrderImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Track Your Order</b>
              <p>Track your placed order</p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleEditProfile()}
          >
            <div>
              <img src={EditProfileImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Edit Profile</b>
              <p>Update your profile </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handlePaymentMethod()}
          >
            <div>
              <img src={PaymentOptionsImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Add Payment Method</b>
              <p>Update payment options</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleRewardPoint()}
          >
            <div>
              <img src={RewardImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Reward Points</b>
              <p>Check your reward point</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "10px" }}>
          <div
            className={UserAccountStyle.card}
            onClick={() => handleRecommandation()}
          >
            <div>
              <img src={RecommandationImg} width="50" height="50" />
            </div>
            <div className={UserAccountStyle.cardText}>
              <b>Recommandation</b>
              <p>Basis of search history</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default UserAccount;
