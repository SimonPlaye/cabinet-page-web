import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Competences } from "./Competences";
import { HomePage } from "./HomePage";
import { Footer } from "components/Footer/Footer";
import { LesAvocats } from "./LesAvocats";

export const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="les-avocats" element={<LesAvocats />} />
      </Routes>
      <Footer />
    </div>
  );
};
