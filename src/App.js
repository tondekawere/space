import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/MyHero";
import About from "./components/MyAbout";
import Services from "./components/MyServices";
import Blog from "./components/MyBlog";
import Contact from "./components/MyContact";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
        <Hero />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </>
    );
  } 
  
}
  


export default App;
