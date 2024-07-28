import React from "react";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/BannerMenCollection/Banner";
import ProductCategory from "../../Components/ProductCategory/ProductCategory";
import FeatureBox from "../../Components/FeaturesRow/FeatureRow";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import Discount from "../../Components/Discount/Discount";
import NewProducts from "../../Components/NewProducts/NewProducts";
import InspiredProduct from "./../../Components/InspiredProduct/InspiredProduct";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Banner />
      <FeatureBox />
      <FeatureProducts />
      <Discount />
      <InspiredProduct />
      <LatestBlog />
      <Footer />
    </>
  );
};

export default Home;
