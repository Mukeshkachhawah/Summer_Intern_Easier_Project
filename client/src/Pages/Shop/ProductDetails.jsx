import React from "react";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";
import ProductDetail from "../../Components/ProductDetails/ProductDetails";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Section title={"Product Details"} pagePath={"Home / Product Details"} />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetails;
