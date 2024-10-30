import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "../Services";

const HomePage = () => {
  const { isLoading, user, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="homepage-container h-screen">
      <header className="header">
        <h1>Welcome to Our App!</h1>
      </header>

      <section className="welcome-message">
          <h2>{isAuthenticated ? `Hello, ${user.name}!` : 'Join us today!'}</h2>
          <p>
            {user
              ? 'You are logged in. Enjoy exploring our features!'
              : 'Sign up now to access exclusive content and features!'}
          </p>
        </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p className="font-normal">
          This website is demo for basic Showing and using React Auth packages easily 
        </p>
      </section>

      <footer id="contact" className="footer-section">
        <p>Contact us at karancommunicate@example.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
