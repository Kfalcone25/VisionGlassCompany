import { Route, Router, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ResidentialPage from "./pages/ResidentialPage/ResidentialPage.tsx";
import Layout from "./pages/Layout/Layout.tsx";
import CommercialPage from "./pages/CommercialPage/CommercialPage.tsx";
import Gallery from "./pages/GalleryPage/GalleryPage.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  );
}

export default App;
