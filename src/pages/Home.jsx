import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Table from "../Components/Table";
import Partners from "../Components/Partners";
import Reviews from "../Components/Reviews";
import CustomButton from "../Components/CustomButton";
import Questions from "../Components/Questions";
import VideoCard from "../Components/VideoCard";
import DataStructures from "../Components/DataStructures";
import Languages from "../Components/Languages";
import Practice from "../Components/Practice";
import Notation from "../Components/Notation";
import BeforeFooter from "../Components/BeforeFooter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Table />
      <Partners />
      <Reviews />
      <Questions />
      <VideoCard />
      <DataStructures />
      <Languages />
      <Practice />
      <Notation />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Home;
