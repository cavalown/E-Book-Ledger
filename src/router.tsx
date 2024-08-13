import React from "react";
import EnterPage from "./views/EnterPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import CategoryPage from "./views/CategoryPage";
import PlatformPage from "./views/PlatformPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />}>
        {/* <Route path="team" element={<Team />} /> */}
      </Route>
      <Route path="platform" element={<PlatformPage />} />
      <Route path="enter" element={<EnterPage />} />
    </Routes>
  );
};

export default AppRoutes;
