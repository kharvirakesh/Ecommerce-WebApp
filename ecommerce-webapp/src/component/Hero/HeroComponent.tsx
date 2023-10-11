import React from "react";
import styles from "../../styles/Hero.module.css";

interface IHeroComponentProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const HeroComponent = ({
  property1,
  property2,
}: IHeroComponentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <span className={styles.title}>Exquisite Watches</span>
        <br />
        <span className={styles.subTitle}>
          Choose Luxury, <span style={{ color: "#1C1415" }}>Choose Us</span>
        </span>
        <br />
        <span className={styles.description}>
          Discover the Perfect Watch for Every Occasion and Elevate Your Style
          with Timeless Elegance and Precision Craftsmanship - watch
        </span>
        <br />
        <span className={styles.pricing}>$430.00</span>
      </div>

      {/* carousel component goes here */}
      <div className={styles.contents}>
        <span className={styles.title}>Exquisite Watches</span>
        <br />
        <span className={styles.subTitle}>
          Choose Luxury, <span style={{ color: "#1C1415" }}>Choose Us</span>
        </span>
        <br />
        <span className={styles.description}>
          Discover the Perfect Watch for Every Occasion and Elevate Your Style
          with Timeless Elegance and Precision Craftsmanship - watch
        </span>
        <br />
        <span className={styles.pricing}>$430.00</span>
      </div>
    </div>
  );
};
