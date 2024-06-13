import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Shivam Jha</h3>

        <p>
        Hey, Everyone I am shivam jha, the founder of togs India.
          <br />
          Our mission at Togs India is to redefine fashion and elevate your style, aiming to become the nation's premier destination for trendsetting clothing.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
