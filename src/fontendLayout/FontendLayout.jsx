import React from "react";
import style from "./FontendLayout.module.css";
import { Outlet } from "react-router-dom";

// Scroll to top
// Layout
import Navbar from "../sharedLayout/navbar/Navbar";
import Newsletter from "../sharedLayout/newsletter/Newsletter";
import Footer from "../sharedLayout/footer/Footer";

// Extra
export default function FontendLayout() {
  return (
    <>
      <div className={style.fontendLayout}>
        <div className={style.navbar}>
          <Navbar />
        </div>
        <div className={style.body}>
          <Outlet />
        </div>
        <div className={style.newsletter}>
          <Newsletter />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
