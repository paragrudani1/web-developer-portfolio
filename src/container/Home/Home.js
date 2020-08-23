/** @format */

import React from "react";

import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import Card from "./Card/Card";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact.js";
import ImageSlider from "./ImageSlider/ImageSlider";
import Story from "./Story/Story";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../../components/UI/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Introduction />
      <About />
      <Card />
      <Skill />
      <Contact />
      <ImageSlider />
      <Story />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
