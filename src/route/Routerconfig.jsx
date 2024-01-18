import React from "react";
import { Routes, Route } from "react-router-dom";
import FontendLayout from "../fontendLayout/FontendLayout";

import HomeRoute from "../pages/homeRoute/Home_Route";
import AboutRoute from "../pages/aboutRoute/About_Route";
import DevelopmentRoute from "../pages/developmentRoute/Development_Route";
import ServiceRoute from "../pages/serviceRoute/Service_Route";
import ContactRoute from "../pages/contact/Contact_Route";
import NotFoundRoute from "../pages/errorRoute/NotFound_Route";

const Routerconfig = () => {
  return (

      <Routes>
        <Route path="/" element={<FontendLayout />}>
          <Route index element={<HomeRoute />} />
          <Route path="about" element={<AboutRoute />} />
          <Route path="development" element={<DevelopmentRoute />} />
          <Route path="service" element={<ServiceRoute />} />
          <Route path="contact" element={<ContactRoute />} />
        </Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>

  );
};

export default Routerconfig;
