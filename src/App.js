import React from "react";
import "./App.css";
import {
  Navbar,
  Banner,
  Purpose,
  Works,
  Achievement,
  Testimonials,
  Team,
  Blog,
  Clients,
  Contact,
  Footer,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Purpose />
      <Works />
      <Achievement />
      <Testimonials />
      <Team />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}
