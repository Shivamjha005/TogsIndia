import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Togs India Fashion</h4>
          <p>
          Our mission at Togs India is to redefine fashion and elevate your style, aiming to become the nation's premier destination for trendsetting clothing.
          </p>

          <p>
          Explore a myriad of styles and trends. Click below to discover our fashion-forward menu.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Shivam Jha</h3>
            </div>

            <p>
            I am Shivam Jha, founder of Togs India, proudly affiliated with the Government of India, shaping the future of fashion.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
