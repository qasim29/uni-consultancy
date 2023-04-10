import React from "react";
import  styles  from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <nav>
          <ul className={styles.navtype}>
            <li>
              <a
                href="https://codepen.io/EneergeticTomy/"
                target="_blank"
                className={styles.active}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/TomikaBoy/full/LqMpaE"
                target="_blank"
                className={styles.active1}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/"
                target="_blank"
                className={styles.active2}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://w3schools.com/"
                target="_blank"
                className={styles.active3}
              >
                Support
              </a>
            </li>
            <div className={styles.line}></div>
            <li>
              <a>
                {/* add show function on onClick which shows drop down menu of html css ...*/}
                <i className={styles.fa + styles.fasearch}></i>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/"
                target="_blank"
                className={styles.active2}
              >
                Contact
              </a>
            </li>
  
          </ul>
        </nav>
        <noscript>
          <div className={styles.line}>
            <div className={styles.linear}>
              <div className={styles.linew5}></div>
            </div>
          </div>
        </noscript>
        {/* <template>
          <div className={styles.flashfluid}>
            <div className={styles.flashtime}>
              <div className={styles.flashGIF}></div>
            </div>
          </div>
        </template> */}
        <noscript>
          <div className={styles.cyrclecenter}>
            <div className={styles.radialcyrcle}></div>
          </div>
        </noscript>
      </div>
      {/* <template>
        <div className={styles.text-className"{styles.
          <div className={styles.text-container}>
            <div
              className={styles.textcontentfluid"
              id="chinese-text"
              data-text-type="chinese}>
              <div className={styles.chinese-text}>設</div>
              <div className={styles.chinese-text2}>計</div>
              <div className={styles.chinese-text3}>和</div>
              <div className={styles.chinese-text4}>開</div>
              <div className={styles.chinese-text5}>發</div>
            </div>
          </div>
        </div>
      </template>
 */}
      <div className={styles.dropdown} id="anotherFunction">
        <div className={styles.drop1}>HTML</div>
        <div className={styles.drop2}>CSS</div>
        <div className={styles.drop3}>Javascript</div>
        <div className={styles.drop4}>Sass</div>
      </div>
    </>
  );
};

export default NavBar;
