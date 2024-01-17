import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontendLayout from "../fontendLayout/FontendLayout";

import HomeRoute from "../pages/homeRoute/Home_Route";
import AboutRoute from "../pages/aboutRoute/About_Route";
import DevelopmentRoute from "../pages/developmentRoute/Development_Route";
import ServiceRoute from "../pages/serviceRoute/Service_Route";
import ContactRoute from "../pages/contact/Contact_Route";
import NotFoundRoute from "../pages/errorRoute/NotFound_Route";

const Routerconfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="reactgithub2024/" element={<FontendLayout />}>
          <Route index element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/evelopment" element={<DevelopmentRoute />} />
          <Route path="/service" element={<ServiceRoute />} />
          <Route path="/service" element={<ContactRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routerconfig;
