import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Competences } from "./Competences";
import { HomePage } from "./HomePage";
import { Footer } from "components/Footer/Footer";

export const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
      <Footer />
    </div>
  );
};
