import React from "react";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";
import ProductCategory from "../../Components/ProductCategory/ProductCategory";

const ShopCategory = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Section
        title={"Shop Category"}
        pagePath={"Home / Shop / Women Fashion"}
      />
      <ProductCategory />
      <Footer />
    </>
  );
};

export default ShopCategory;
