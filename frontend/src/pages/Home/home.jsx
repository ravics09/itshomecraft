import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Stack } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeStyle from "./homeStyle.module.css";

import Art1 from "./../../assets/images/carouselmages/art5.jpg";
import Art2 from "./../../assets/images/carouselmages/art2.jpg";
import Art3 from "./../../assets/images/carouselmages/art4.jpg";

import Card1 from "./../../assets/images/carouselmages/card1.png";
import Card2 from "./../../assets/images/carouselmages/card2.png";
import Card3 from "./../../assets/images/carouselmages/card3.png";
import Card4 from "./../../assets/images/carouselmages/card4.png";

import BestGift1 from "./../../assets/images/bestGifts/best1.jpg";
import BestGift2 from "./../../assets/images/bestGifts/best2.jpg";

import Category1 from "./../../assets/images/category/art.jpg";
import Category2 from "./../../assets/images/category/cloth.jpg";
import Category3 from "./../../assets/images/category/wooden.jpg";
import Category4 from "./../../assets/images/category/gift.jpg";

const { innerHeight: winHight } = window;

const cardData = [
  {
    _id: "5d713995b721c3bb38c1f5d0",
    name: "Wool Thread",
    productImage: Card1,
    brand: "Indico",
    price: 600,
    category: "Thread",
    countInStock: 6,
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
  },
  {
    _id: "5d713a66ec8f2b88b8f830b8",
    name: "Hand Made Charkha",
    productImage: Card2,
    brand: "Indico",
    price: 1000,
    category: "Gift",
    countInStock: 3,
    description:
      "Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.",
  },
  {
    _id: "5d725a037b292f5f8ceff787",
    name: "Wooden Telescope",
    productImage: Card3,
    brand: "Sonoti",
    price: 10000,
    category: "Telescope",
    countInStock: 2,
    description:
      "Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.",
  },
  {
    _id: "5d725a1b7b292f5f8ceff788",
    name: "Wooden Compass",
    productImage: Card4,
    brand: "Sonoti",
    price: 2000,
    category: "Telescope",
    countInStock: 1,
    description: "Hand made compass build with wooden and science",
  },
];

const categoryData = [
  {
    _id: "5d713995b721c3bb38c1f5d0",
    name: "Cloths",
    categoryImage: Category2,
  },
  {
    _id: "5d713995b721c3bb38c1f5d3",
    name: "Furniture",
    categoryImage: Category3,
  },
  {
    _id: "5d713995b721c3bb38c1f520",
    name: "Art",
    categoryImage: Category1,
  },
  {
    _id: "5d713995b721c3bb58c1f520",
    name: "Gifts",
    categoryImage: Category4,
  }
]

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      pause="hover"
      controls={false}
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Art1}
          alt="First slide"
          className={HomeStyle.carouselImage}
        />
        <Carousel.Caption className={HomeStyle.caption}>
          <h1>Home Crafted Items</h1>
          <h5>For Your Love</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Art2}
          alt="Second slide"
          className={HomeStyle.carouselImage}
        />
        <Carousel.Caption className={HomeStyle.caption}>
          <h1>Home Made Festival Gifts</h1>
          <h3>For Your Relatives</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Art3}
          alt="Third slide"
          className={HomeStyle.carouselImage}
        />
        <Carousel.Caption className={HomeStyle.caption}>
          <h1>Digital Painting</h1>
          <h3>For Your Home</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const NewArrivals = ({ item }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div
      className={HomeStyle.card}
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <div className={HomeStyle.img_wrapper}>
        <img className={HomeStyle.img_responsive} src={item.productImage} />
        <div className={HomeStyle.img_overlay}>
          <Button variant="success" size="sm" style={style} width="100%">
            Quick View
          </Button>
        </div>
      </div>
      <Stack gap={1} className="col-md-8 mx-auto">
        <b className={HomeStyle.cardProductName}>{item.name}</b>
        <b className={HomeStyle.cardProductPrice}>Rs.{item.price}</b>
        <b className={HomeStyle.cardProductPrice}>Rating *****</b>
        <Button variant="success" size="sm" style={{ width: "100%" }}>
          Shop Now
        </Button>
      </Stack>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <CarouselSection />
      <div className={HomeStyle.middleSection}>
        <h3 className={HomeStyle.middleSectionTitle}>hello</h3>
        <p className={HomeStyle.middleSectionSubTitle}>
          Welcome to our world! We work in ethical partnership with artisans
          around the globe to bring <br />
          you contemporary handcrafted goods with an authentic soul.
        </p>
      </div>

      <div className={HomeStyle.middleSection} style={{height: '500px'}}>
        <h3 className={HomeStyle.middleSectionTitle}>Top Categories</h3>
        <Button variant="outline-secondary" size="sm">
          View All
        </Button>
        <Row>
          {categoryData
            ? categoryData.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <div
                    className={HomeStyle.categoryCard}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className={HomeStyle.categoryImage}
                      src={item.categoryImage}
                    />
                    <div className={HomeStyle.categoryTitle}>
                      <Button variant="success">{item.name}</Button>
                    </div>
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </div>

      <div className={HomeStyle.middleSection}>
        <h3 className={HomeStyle.middleSectionTitle}>new arrivals</h3>
        <Button variant="outline-secondary" size="sm">
          View All
        </Button>
        <br />
        <Row>
          {cardData
            ? cardData.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <NewArrivals item={item} />
                </Col>
              ))
            : null}
        </Row>
      </div>

      <div
        className={HomeStyle.middleSection}
        style={{ paddingBottom: "50px" }}
      >
        <h3 className={HomeStyle.middleSectionTitle}>most wanted</h3>
        <Row>
          <Col>
            <div
              className={HomeStyle.bestGiftCard}
              style={{ cursor: "pointer" }}
            >
              <img className={HomeStyle.bestGiftImage} src={BestGift1} />
              <div className={HomeStyle.bestGiftTitle}>
                <p style={{ color: "white", fontSize: "20px" }}>
                  Best Seeling Gift:
                </p>

                <p
                  style={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Hand Made Gitar:
                </p>
              </div>
            </div>
            <br />
            <Button variant="success">Buy Now</Button>
          </Col>
          <Col>
            <div
              className={HomeStyle.bestGiftCard}
              style={{ cursor: "pointer" }}
            >
              <img className={HomeStyle.bestGiftImage} src={BestGift2} />
              <div className={HomeStyle.bestGiftTitle}>
                <p style={{ color: "white", fontSize: "20px" }}>
                  Best Seeling Gift:
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Hand Made Decor Item
                </p>
              </div>
            </div>
            <br />
            <Button variant="success">Buy Now</Button>
          </Col>
        </Row>
      </div>

      <div className={HomeStyle.reviewSection}>
        <h3 className={HomeStyle.reviewSectionTitle}>the reviews are in:</h3>
        <hr />
      </div>

      <div className={HomeStyle.middleSection}>
        <h3 className={HomeStyle.middleSectionTitle}>as seen in</h3>
        <p className={HomeStyle.middleSectionSubTitle}>
          Welcome to our world! We work in ethical partnership with artisans
          around the globe to bring <br />
          you contemporary handcrafted goods with an authentic soul.
        </p>
      </div>
      <hr />
      <div className={HomeStyle.middleSection}>
        <h3 className={HomeStyle.middleSectionTitle}>
          sell on @itshomecraft.com
        </h3>
        <hr />
      </div>
    </>
  );
};

export default Home;
