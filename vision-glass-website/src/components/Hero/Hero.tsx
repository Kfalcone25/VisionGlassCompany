import React from "react";
import styles from "./Hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to Vision Glass</h1>
        <p>Let us make you're vision a reality!</p>
        <button>REQUEST QUOTE</button>
      </div>
    </section>
  );
};

export default Hero;
