import React from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import BeforeFooter from "./BeforeFooter";

function Products() {
  return (
    <div>
      {/* <ContentWrapper> */}
      <Header />
      <Hero />
      {/* <Card /> */}
      <BeforeFooter />
      <Footer />
      {/* </ContentWrapper> */}
    </div>
  );
}

export default Products;
