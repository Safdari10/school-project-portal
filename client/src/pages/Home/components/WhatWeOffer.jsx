import styles from "./WhatWeOffer.module.css";
import animationSrc from "../../../assets/Home/animation.png";
import gamesSrc from "../../../assets/Home/games.png";
import chatbotsSrc from "../../../assets/Home/chatbots.png";
import augrealitySrc from "../../../assets/Home/augreality.png";
import laptopSrc from "../../../assets/Home/laptop1.png";

function WhatWeOffer() {
  return (
    <section className={styles.offer}>
      <div className={styles.content}>
        <div className={styles.textAndIcons}>
          <div className={styles.textContainer}>
            <h2>What we Offer</h2>
            <h5>
              The Creative Problem Solving programme is a series of digital
              creation projects aimed to encourage self-motivation and student
              agency, designed by New Zealand&apos;s leading IT industry experts
              and schools.
            </h5>
          </div>

          <div className={styles.iconsSection}>
            <h3 className={styles.iconHeading}>What will students create?</h3>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img
                  src={animationSrc}
                  alt="Animation"
                />
              </div>
              <div className={styles.icon}>
                <img
                  src={gamesSrc}
                  alt="Games"
                />
              </div>
              <div className={styles.icon}>
                <img
                  src={chatbotsSrc}
                  alt="Chatbots"
                />
              </div>
              <div className={styles.icon}>
                <img
                  src={augrealitySrc}
                  alt="Augmented Reality"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.laptopContainer}>
          <img
            src={laptopSrc}
            alt="Laptop with example project"
          />
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
