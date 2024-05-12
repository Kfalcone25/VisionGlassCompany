import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to Vision Glass</h1>
        <p>Let us make you're vision a reality!</p>
        <Link to={"/contact"}>
          <button>REQUEST QUOTE</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
