import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import ContactPage from "@/pages/contact";
import ProjectsPage from "@/pages/projects";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ServicesPage />} path="/services" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<ProjectsPage />} path="/projects" />
    </Routes>
  );
}

export default App;
