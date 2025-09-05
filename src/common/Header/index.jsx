import React from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className="container-md bg-white py-3">
        <div
          className={`${styles.headerContainer} d-flex container-md px-3 mx-md-0 justify-content-between align-items-center`}
        >
          <div className={`${styles.imgContainer} d-flex align-items-center`}>
            <img
              src="/assets/pixel_logo.png"
              alt="HexaHealth Logo"
              className={styles.logo}
            />
          </div>
          <div className="d-none d-md-flex gap-3">
            <Button
              isicon={true}
              href={"tel:+917075008561"}
              name="Call 7075008561"
              bgcolor="#ff6f61"
              txtcolor="#fff"
              icon={"phone"}
              iconcolor={"#ffff"}
            />
            <Button
              href={"https://wa.me/917075008561"}
              name="Chat on WhatsApp"
              bgcolor="#21a179"
              txtcolor="#fff"
              imgicon={"/assets/whatsapp.png"}
              isimg={true}
            />
          </div>
          <div className="d-flex d-md-none gap-0">
            <Button
              isicon={true}
              href={"tel:+919355533019"}
              name="Call Expert"
              bgcolor="#ff6f61"
              txtcolor="#fff"
              icon={"phone"}
              iconcolor={"#ffff"}
            />
            <Button
              href={"https://wa.me/919355533019"}
              name=""
              bgcolor="#21a179"
              txtcolor="#fff"
              imgicon={"/assets/whatsapp.png"}
              isimg={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
