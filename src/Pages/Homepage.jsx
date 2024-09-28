import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "../Services";

const HomePage = () => {
  const {isLoading} = useAuth0();
  if(isLoading){
    return(<Loader/>)
  }
  return (
    <div className="homepage-container">
      <header className="flex flex-row">
        <nav className="flex flex-grow-0">
          <h1>My Website</h1>
          <ul className="flex justify-around">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>We offer the best solutions for your business.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          We are a company that provides top-notch services to help you grow
          your business.
        </p>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Web Development</h3>
            <p>We build fast, scalable websites.</p>
          </div>
          <div className="service">
            <h3>SEO Optimization</h3>
            <p>Improve your site's ranking with our SEO services.</p>
          </div>
          <div className="service">
            <h3>Consulting</h3>
            <p>Expert advice to take your business to the next level.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <p>Contact us at info@example.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
